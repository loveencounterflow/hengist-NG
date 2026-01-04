(async function() {
  'use strict';
  var GTNG, GUY, SFMODULES, Test, alert, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper,
    modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('hollerith'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

  //===========================================================================================================
  this.tasks = {
    //---------------------------------------------------------------------------------------------------------
    type_data_handling: function() {
      var Type, Typespace;
      ({Type, Typespace} = SFMODULES.unstable.require_nanotypes());
      (() => {        //.......................................................................................................
        var My_typespace, T, Ωbbntt__10, Ωbbntt__11, Ωbbntt__12, Ωbbntt__13, Ωbbntt___1, Ωbbntt___2, Ωbbntt___3, Ωbbntt___4, Ωbbntt___5, Ωbbntt___6, Ωbbntt___7, Ωbbntt___8, Ωbbntt___9;
        My_typespace = class My_typespace extends Typespace {
          //...................................................................................................
          static integer(x) {
            if (Number.isSafeInteger(x)) {
              return true;
            }
            if (Number.isFinite(x)) {
              return this.fail(`${rpr(x)} is a non-integer number`, {
                fraction: x % 1
              });
            }
            return this.fail(`${rpr(x)} is not even a finite number`);
          }

          //...................................................................................................
          static even_integer(x) {
            if (!this.T.integer.isa(x)) {
              return this.fail("not an integer");
            }
            if ((modulo(x, 2)) !== 0) {
              return this.fail("detected remainder");
            }
            return true;
          }

        };
        //.....................................................................................................
        T = new My_typespace();
        this.eq((Ωbbntt___1 = function() {
          return T.integer.isa(9987);
        }), true);
        this.eq((Ωbbntt___2 = function() {
          return T.integer.data;
        }), {});
        this.eq((Ωbbntt___3 = function() {
          return T.integer.isa(9987.125);
        }), false);
        this.eq((Ωbbntt___4 = function() {
          return T.integer.data;
        }), {
          message: '9987.125 is a non-integer number',
          fraction: 0.125
        });
        this.eq((Ωbbntt___5 = function() {
          return T.even_integer.isa(33.125);
        }), false);
        this.eq((Ωbbntt___6 = function() {
          return T.integer.data;
        }), {
          message: '33.125 is a non-integer number',
          fraction: 0.125
        });
        this.eq((Ωbbntt___7 = function() {
          return T.even_integer.data;
        }), {
          message: 'not an integer'
        });
        this.eq((Ωbbntt___8 = function() {
          return T.even_integer.isa(777);
        }), false);
        this.eq((Ωbbntt___9 = function() {
          return T.integer.data;
        }), {});
        this.eq((Ωbbntt__10 = function() {
          return T.even_integer.data;
        }), {
          message: 'detected remainder'
        });
        this.eq((Ωbbntt__11 = function() {
          return T.even_integer.isa(888);
        }), true);
        this.eq((Ωbbntt__12 = function() {
          return T.integer.data;
        }), {});
        this.eq((Ωbbntt__13 = function() {
          return T.even_integer.data;
        }), {});
        //.....................................................................................................
        return null;
      })();
      (() => {        //.......................................................................................................
        var My_typespace, T, Ωbbntt__15, Ωbbntt__16;
        My_typespace = class My_typespace extends Typespace {
          //...................................................................................................
          static integer(x) {
            this.assign({x});
            if (Number.isSafeInteger(x)) {
              return true;
            }
            if (Number.isFinite(x)) {
              return this.fail(`${rpr(x)} is a non-integer number`, {
                fraction: x % 1
              });
            }
            return this.fail(`${rpr(x)} is not even a finite number`);
          }

          //...................................................................................................
          static even_integer(x) {
            if (!this.T.integer.isa(x, this.data)) {
              // unless @T.integer.isa x, @data
              //   debug 'Ωbbntt__14', @data
              return this.fail("not an integer");
            }
            if ((modulo(x, 2)) !== 0) {
              return this.fail("detected remainder");
            }
            return true;
          }

        };
        //.....................................................................................................
        T = new My_typespace();
        T.even_integer.isa('what?');
        this.eq((Ωbbntt__15 = function() {
          return T.integer.data;
        }), {
          x: 'what?',
          message: "'what?' is not even a finite number"
        });
        this.eq((Ωbbntt__16 = function() {
          return T.even_integer.data;
        }), {
          message: "not an integer"
        });
        //.....................................................................................................
        return null;
      })();
      (() => {        //.......................................................................................................
        var My_typespace, T, Ωbbntt__17, Ωbbntt__18;
        My_typespace = class My_typespace extends Typespace {
          //...................................................................................................
          static integer(x) {
            this.assign({
              me: 'integer'
            });
            this.assign({x});
            if (Number.isSafeInteger(x)) {
              return true;
            }
            if (Number.isFinite(x)) {
              return this.fail(`${rpr(x)} is a non-integer number`, {
                fraction: x % 1
              });
            }
            return this.fail(`${rpr(x)} is not even a finite number`);
          }

          //...................................................................................................
          static even_integer(x) {
            this.assign({
              me: 'even_integer'
            });
            if (!this.T.integer.dm_isa(this.data, {
              me: 'integer_me',
              message: 'message_from_integer'
            }, x)) {
              return this.fail(`not an integer: ${rpr(this.data.message_from_integer)}`);
            }
            if ((modulo(x, 2)) !== 0) {
              return this.fail("detected remainder");
            }
            return true;
          }

        };
        //.....................................................................................................
        T = new My_typespace();
        T.even_integer.isa('what?');
        this.eq((Ωbbntt__17 = function() {
          return T.integer.data;
        }), {
          me: 'integer',
          x: 'what?',
          message: "'what?' is not even a finite number"
        });
        this.eq((Ωbbntt__18 = function() {
          return T.even_integer.data;
        }), {
          me: 'even_integer',
          integer_me: 'integer',
          x: 'what?',
          message_from_integer: "'what?' is not even a finite number",
          message: `not an integer: "'what?' is not even a finite number\"`
        });
        //.....................................................................................................
        T.even_integer.isa(26);
        debug('Ωbbntt__19', T.integer.data);
        debug('Ωbbntt__20', T.even_integer.data);
        //.....................................................................................................
        return null;
      })();
      (() => {        //.......................................................................................................
        var My_typespace, T, Ωbbntt__21, Ωbbntt__22;
        My_typespace = class My_typespace extends Typespace {
          //...................................................................................................
          static integer(x) {
            this.assign({
              me: 'integer'
            });
            this.assign({x});
            if (Number.isSafeInteger(x)) {
              return true;
            }
            if (Number.isFinite(x)) {
              return this.fail(`${rpr(x)} is a non-integer number`, {
                fraction: x % 1
              });
            }
            return this.fail(`${rpr(x)} is not even a finite number`);
          }

          //...................................................................................................
          static even_integer(x) {
            this.assign({
              me: 'even_integer'
            });
            if (!this.T.integer.dm_isa(this.data, {
              me: 'integer_me',
              message: 'message_from_integer'
            }, x)) {
              return this.fail(`not an integer: ${rpr(this.data.message_from_integer)}`);
            }
            if ((modulo(x, 2)) !== 0) {
              return this.fail("detected remainder");
            }
            return true;
          }

        };
        //.....................................................................................................
        T = new My_typespace();
        T.even_integer.isa('what?');
        this.eq((Ωbbntt__21 = function() {
          return T.integer.data;
        }), {
          me: 'integer',
          x: 'what?',
          message: "'what?' is not even a finite number"
        });
        this.eq((Ωbbntt__22 = function() {
          return T.even_integer.data;
        }), {
          me: 'even_integer',
          integer_me: 'integer',
          x: 'what?',
          message_from_integer: "'what?' is not even a finite number",
          message: `not an integer: "'what?' is not even a finite number\"`
        });
        //.....................................................................................................
        T.even_integer.isa(26);
        debug('Ωbbntt__23', T.integer.data);
        debug('Ωbbntt__24', T.even_integer.data);
        //.....................................................................................................
        return null;
      })();
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    nanotypes_v2_parametrized_types: function() {
      var Type, Typespace;
      ({Type, Typespace} = SFMODULES.unstable.require_nanotypes_v2());
      (() => {        //.......................................................................................................
        var My_typespace, T;
        My_typespace = class My_typespace extends Typespace {
          //...................................................................................................
          static integer(x) {
            this.assign({x});
            if (Number.isSafeInteger(x)) {
              return true;
            }
            if (Number.isFinite(x)) {
              return this.fail(`${rpr(x)} is a non-integer number`, {
                fraction: x % 1
              });
            }
            return this.fail(`${rpr(x)} is not even a finite number`);
          }

          //...................................................................................................
          static even_integer(x) {
            if (!this.T.integer.isa(x)) {
              return this.fail(`${rpr(x)} isn't an integer`);
            }
            if ((modulo(x, 2)) !== 0) {
              return this.fail(`${rpr(x)} isn't even`);
            }
            return true;
          }

          //...................................................................................................
          static list(x) {
            return Array.isArray(x);
          }

          //...................................................................................................
          static list_of(x, element_type = null) {
            var element, i, idx, len, message, ref;
            if (!this.T.list.isa(x)) {
              // info 'Ωbbntt__25', 'list_of', { x, element_type, }
              return this.fail("not a list");
            }
            if (element_type == null) {
              return true;
            }
//.................................................................................................
            for (idx = i = 0, len = x.length; i < len; idx = ++i) {
              element = x[idx];
              if (!element_type.isa(element)) {
                message = `element at index ${idx} isn't a ${element_type.full_name}`;
                if ((element_type != null ? (ref = element_type.data) != null ? ref.message : void 0 : void 0) != null) {
                  message += ` – ${element_type.data.message}`;
                }
                return this.fail(message);
              }
            }
            return true;
          }

        };
        //.....................................................................................................
        T = new My_typespace();
        (() => {          //.....................................................................................................
          whisper('Ωbbntt__26', '—————————————————————————————————————————————————————————————————————————————');
          help('Ωbbntt__27', T.list_of.name);
          help('Ωbbntt__28', T.list_of.full_name);
          help('Ωbbntt__29', T.list_of.isa([5], T.integer));
          info('Ωbbntt__30', T.list_of.inputs);
          info('Ωbbntt__31', T.list_of.inputs[0]);
          help('Ωbbntt__32', T.list_of.full_name);
          return null;
        })();
        (() => {          //.....................................................................................................
          whisper('Ωbbntt__33', '—————————————————————————————————————————————————————————————————————————————');
          help('Ωbbntt__34', T.list.isa([2, 4, 6]));
          help('Ωbbntt__35', T.list_of.isa([2, 4, 6]));
          warn('Ωbbntt__36', T.list_of.data);
          help('Ωbbntt__37', T.list_of.isa([2, 4, 6], T.even_integer));
          warn('Ωbbntt__38', T.list_of.data);
          help('Ωbbntt__39', T.list_of.isa([2, 4, 7], T.even_integer));
          warn('Ωbbntt__40', T.list_of.data);
          return null;
        })();
        (() => {          //.....................................................................................................
          var data, e, Ωbbntt__43, Ωbbntt__44;
          whisper('Ωbbntt__41', '—————————————————————————————————————————————————————————————————————————————');
          data = {};
          help('Ωbbntt__42', T.list_of.dm_isa(data, {
            message: 'msg'
          }, [2, 4, 7], T.even_integer));
          this.eq((Ωbbntt__43 = function() {
            return T.list_of.data;
          }), {
            message: "element at index 2 isn't a even_integer – 7 isn't even"
          });
          this.eq((Ωbbntt__44 = function() {
            return data;
          }), {
            msg: "element at index 2 isn't a even_integer – 7 isn't even"
          });
          try {
            T.list_of.validate([2, 4, 7], T.even_integer);
          } catch (error) {
            e = error;
            warn('Ωbbntt__45', reverse(e.message));
          }
          try {
            T.list_of.validate(true, T.even_integer);
          } catch (error) {
            e = error;
            warn('Ωbbntt__46', reverse(e.message));
          }
          try {
            T.list_of.validate([], T.even_integer);
          } catch (error) {
            e = error;
            warn('Ωbbntt__47', reverse(e.message));
          }
          try {
            return T.list_of.validate([1.3], T.even_integer);
          } catch (error) {
            e = error;
            return warn('Ωbbntt__48', reverse(e.message));
          }
        })();
        (() => {          //.....................................................................................................
          var data, Ωbbntt__49, Ωbbntt__50;
          data = {};
          this.throws((Ωbbntt__49 = function() {
            return T.list_of.dm_validate(data, {
              message: 'msg'
            }, [2, 4, 7], T.even_integer);
          }), /not a valid list_of/);
          this.eq((Ωbbntt__50 = function() {
            return data;
          }), {
            msg: "element at index 2 isn't a even_integer – 7 isn't even"
          });
          return null;
        })();
        (() => {          //.....................................................................................................
          var data, Ωbbntt__51, Ωbbntt__52;
          data = {};
          this.eq((Ωbbntt__51 = function() {
            return T.even_integer.dm_isa(data, {
              message: 'msg'
            }, 123456);
          }), true);
          this.eq((Ωbbntt__52 = function() {
            return data;
          }), {});
          return null;
        })();
        (() => {          //.....................................................................................................
          var data, Ωbbntt__53, Ωbbntt__54;
          data = {};
          this.eq((Ωbbntt__53 = function() {
            return T.even_integer.dm_validate(data, {
              message: 'msg'
            }, 123456);
          }), 123456);
          this.eq((Ωbbntt__54 = function() {
            return data;
          }), {});
          return null;
        })();
        (() => {          //.....................................................................................................
          var data, Ωbbntt__55, Ωbbntt__56;
          data = {};
          this.eq((Ωbbntt__55 = function() {
            return T.list_of.dm_validate(data, {
              message: 'msg'
            }, [2, 4, 8], T.even_integer);
          }), [2, 4, 8]);
          this.eq((Ωbbntt__56 = function() {
            return data;
          }), {});
          return null;
        })();
        //.....................................................................................................
        return null;
      })();
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    nanotypes_v2_validation: function() {
      var My_typespace, T, Type, Typespace, Ωbbntt__59, Ωbbntt__60, Ωbbntt__61, Ωbbntt__62, Ωbbntt__63, Ωbbntt__64, Ωbbntt__65, Ωbbntt__66, Ωbbntt__67, Ωbbntt__68, Ωbbntt__69, Ωbbntt__70, Ωbbntt__71, Ωbbntt__72, Ωbbntt__73, Ωbbntt__74;
      ({Type, Typespace} = SFMODULES.unstable.require_nanotypes_v2());
      //.......................................................................................................
      My_typespace = class My_typespace extends Typespace {
        //...................................................................................................
        static integer(x) {
          this.assign({x});
          if (Number.isSafeInteger(x)) {
            return true;
          }
          if (Number.isFinite(x)) {
            return this.fail(`${rpr(x)} is a non-integer number`, {
              fraction: x % 1
            });
          }
          return this.fail(`${rpr(x)} is not even a finite number`);
        }

        //...................................................................................................
        static text(x) {
          this.assign({x});
          if ((typeof x) === 'string') {
            return true;
          }
          return false;
        }

        //...................................................................................................
        static point(x) {
          this.assign({x});
          if (this.T.integer.isa(x)) {
            return true;
          }
          if (!(this.T.text.isa(x))) {
            return this.fail(`${rpr(x)} is not an integer and not a text`);
          }
          if (!((Array.from(x)).length === 1)) {
            return this.fail(`${rpr(x)} is a text but not with a single codepoint`);
          }
          return true;
        }

      };
      // return true if Number.isSafeInteger x
      // return @fail "#{rpr x} is a non-integer number", { fraction: x % 1, } if Number.isFinite x
      // return @fail "#{rpr x} is not even a finite number"
      //.....................................................................................................
      T = new My_typespace();
      debug('Ωbbntt__57', T.integer);
      debug('Ωbbntt__58', T.integer.isa);
      //.......................................................................................................
      this.eq((Ωbbntt__59 = function() {
        return T.integer.isa(5);
      }), true);
      this.eq((Ωbbntt__60 = function() {
        return T.point.isa(5);
      }), true);
      this.eq((Ωbbntt__61 = function() {
        return T.point.isa('a');
      }), true);
      //.......................................................................................................
      this.eq((Ωbbntt__62 = function() {
        return T.integer.isa(55.5);
      }), false);
      this.eq((Ωbbntt__63 = function() {
        return T.point.isa(55.5);
      }), false);
      this.eq((Ωbbntt__64 = function() {
        return T.point.isa('abc');
      }), false);
      //.......................................................................................................
      this.eq((Ωbbntt__65 = function() {
        return T.integer.validate(5);
      }), 5);
      this.eq((Ωbbntt__66 = function() {
        return T.point.validate(5);
      }), 5);
      this.eq((Ωbbntt__67 = function() {
        return T.point.validate('a');
      }), 'a');
      //.......................................................................................................
      this.eq((Ωbbntt__68 = function() {
        var e;
        try {
          return T.integer.validate(55.5);
        } catch (error) {
          e = error;
          return e.message;
        }
      }), `(integer) not a valid integer: 55.5 – 55.5 is a non-integer number`);
      this.eq((Ωbbntt__69 = function() {
        var e;
        try {
          return T.point.validate(55.5);
        } catch (error) {
          e = error;
          return e.message;
        }
      }), `(point) not a valid point: 55.5 – 55.5 is not an integer and not a text`);
      this.eq((Ωbbntt__70 = function() {
        var e;
        try {
          return T.point.validate('abc');
        } catch (error) {
          e = error;
          return e.message;
        }
      }), `(point) not a valid point: abc – 'abc' is a text but not with a single codepoint`);
      //.......................................................................................................
      this.throws((Ωbbntt__71 = function() {
        return T.integer.validate(55.5);
      }), /not a valid integer/);
      this.throws((Ωbbntt__72 = function() {
        return T.point.validate(55.5);
      }), /not a valid point/);
      this.throws((Ωbbntt__73 = function() {
        return T.point.validate('abc');
      }), /not a valid point/);
      this.throws((Ωbbntt__74 = function() {
        return T.point.validate('');
      }), /not a valid point/);
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg;
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: true,
        show_passes: true,
        report_checks: true
      };
      guytest_cfg = {
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      return (new Test(guytest_cfg)).test(this.tasks);
    })();
  }

  // ( new Test guytest_cfg ).test { type_data_handling: @tasks.type_data_handling, }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtbmFub3R5cGVzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBO0lBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixXQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsT0FIRixFQUlFLEdBSkYsQ0FBQSxHQUk0QixHQUFHLENBQUMsR0FKaEMsRUFaQTs7O0VBa0JBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLG1DQUFSLEVBckI1Qjs7O0VBeUJBLElBQUMsQ0FBQSxLQUFELEdBR0UsQ0FBQTs7SUFBQSxrQkFBQSxFQUFvQixRQUFBLENBQUEsQ0FBQTtBQUN0QixVQUFBLElBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxJQUFGLEVBQ0UsU0FERixDQUFBLEdBQzhCLFNBQVMsQ0FB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O01BQUgsQ0FBZixDQUFSLEVBQTJELG1CQUEzRDtNQUNBLElBQUMsQ0FBQSxNQUFELENBQVEsQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVIsQ0FBb0IsS0FBcEI7TUFBSCxDQUFmLENBQVIsRUFBMkQsbUJBQTNEO01BQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBUSxDQUFFLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtlQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUixDQUFvQixFQUFwQjtNQUFILENBQWYsQ0FBUixFQUEyRCxtQkFBM0QsRUFqREo7O2FBbURLO0lBcERzQjtFQXhOekIsRUE1QkY7OztFQTRTQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUE7TUFBRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxJQUF2QztRQUE2QyxhQUFBLEVBQWU7TUFBNUQ7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7YUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLElBQUMsQ0FBQSxLQUEvQjtJQUpzQyxDQUFBLElBQXhDOzs7RUE1U0E7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnaG9sbGVyaXRoJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGFza3MgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdHlwZV9kYXRhX2hhbmRsaW5nOiAtPlxuICAgIHsgVHlwZSxcbiAgICAgIFR5cGVzcGFjZSwgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9uYW5vdHlwZXMoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNsYXNzIE15X3R5cGVzcGFjZSBleHRlbmRzIFR5cGVzcGFjZVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBpbnRlZ2VyOiAoIHggKSAtPlxuICAgICAgICAgIHJldHVybiB0cnVlIGlmIE51bWJlci5pc1NhZmVJbnRlZ2VyIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlclwiLCB7IGZyYWN0aW9uOiB4ICUgMSwgfSBpZiBOdW1iZXIuaXNGaW5pdGUgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGV2ZW5faW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcIm5vdCBhbiBpbnRlZ2VyXCIgICAgICkgdW5sZXNzIEBULmludGVnZXIuaXNhIHhcbiAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcImRldGVjdGVkIHJlbWFpbmRlclwiICkgdW5sZXNzICggeCAlJSAyICkgaXMgMFxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFQgPSBuZXcgTXlfdHlwZXNwYWNlKClcbiAgICAgIEBlcSAoIM6pYmJudHRfX18xID0gLT4gVC5pbnRlZ2VyLmlzYSA5OTg3ICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJibnR0X19fMiA9IC0+IFQuaW50ZWdlci5kYXRhICAgICAgICAgICAgICAgKSwge31cbiAgICAgIEBlcSAoIM6pYmJudHRfX18zID0gLT4gVC5pbnRlZ2VyLmlzYSA5OTg3LjEyNSAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqliYm50dF9fXzQgPSAtPiBULmludGVnZXIuZGF0YSAgICAgICAgICAgICAgICksIHsgbWVzc2FnZTogJzk5ODcuMTI1IGlzIGEgbm9uLWludGVnZXIgbnVtYmVyJywgZnJhY3Rpb246IDAuMTI1LCB9XG4gICAgICBAZXEgKCDOqWJibnR0X19fNSA9IC0+IFQuZXZlbl9pbnRlZ2VyLmlzYSAzMy4xMjUgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pYmJudHRfX182ID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgICAgICAgICApLCB7IG1lc3NhZ2U6ICczMy4xMjUgaXMgYSBub24taW50ZWdlciBudW1iZXInLCBmcmFjdGlvbjogMC4xMjUsIH1cbiAgICAgIEBlcSAoIM6pYmJudHRfX183ID0gLT4gVC5ldmVuX2ludGVnZXIuZGF0YSAgICAgICAgICApLCB7IG1lc3NhZ2U6ICdub3QgYW4gaW50ZWdlcicgfVxuICAgICAgQGVxICggzqliYm50dF9fXzggPSAtPiBULmV2ZW5faW50ZWdlci5pc2EgNzc3ICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWJibnR0X19fOSA9IC0+IFQuaW50ZWdlci5kYXRhICAgICAgICAgICAgICAgKSwge31cbiAgICAgIEBlcSAoIM6pYmJudHRfXzEwID0gLT4gVC5ldmVuX2ludGVnZXIuZGF0YSAgICAgICAgICApLCB7IG1lc3NhZ2U6ICdkZXRlY3RlZCByZW1haW5kZXInIH1cbiAgICAgIEBlcSAoIM6pYmJudHRfXzExID0gLT4gVC5ldmVuX2ludGVnZXIuaXNhIDg4OCAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJibnR0X18xMiA9IC0+IFQuaW50ZWdlci5kYXRhICAgICAgICAgICAgICAgKSwge31cbiAgICAgIEBlcSAoIM6pYmJudHRfXzEzID0gLT4gVC5ldmVuX2ludGVnZXIuZGF0YSAgICAgICAgICApLCB7fVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNsYXNzIE15X3R5cGVzcGFjZSBleHRlbmRzIFR5cGVzcGFjZVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBpbnRlZ2VyOiAoIHggKSAtPlxuICAgICAgICAgIEBhc3NpZ24geyB4LCB9XG4gICAgICAgICAgcmV0dXJuIHRydWUgaWYgTnVtYmVyLmlzU2FmZUludGVnZXIgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIGEgbm9uLWludGVnZXIgbnVtYmVyXCIsIHsgZnJhY3Rpb246IHggJSAxLCB9IGlmIE51bWJlci5pc0Zpbml0ZSB4XG4gICAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXZlbl9pbnRlZ2VyOiAoIHggKSAtPlxuICAgICAgICAgICMgdW5sZXNzIEBULmludGVnZXIuaXNhIHgsIEBkYXRhXG4gICAgICAgICAgIyAgIGRlYnVnICfOqWJibnR0X18xNCcsIEBkYXRhXG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJub3QgYW4gaW50ZWdlclwiICAgICApIHVubGVzcyBAVC5pbnRlZ2VyLmlzYSB4LCBAZGF0YVxuICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwiZGV0ZWN0ZWQgcmVtYWluZGVyXCIgKSB1bmxlc3MgKCB4ICUlIDIgKSBpcyAwXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgVCA9IG5ldyBNeV90eXBlc3BhY2UoKVxuICAgICAgVC5ldmVuX2ludGVnZXIuaXNhICd3aGF0PydcbiAgICAgIEBlcSAoIM6pYmJudHRfXzE1ID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgKSwgeyB4OiAnd2hhdD8nLCBtZXNzYWdlOiBcIid3aGF0PycgaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCIsIH1cbiAgICAgIEBlcSAoIM6pYmJudHRfXzE2ID0gLT4gVC5ldmVuX2ludGVnZXIuZGF0YSAgKSwgeyBtZXNzYWdlOiBcIm5vdCBhbiBpbnRlZ2VyXCIsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjbGFzcyBNeV90eXBlc3BhY2UgZXh0ZW5kcyBUeXBlc3BhY2VcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAaW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICBAYXNzaWduIHsgbWU6ICdpbnRlZ2VyJywgfVxuICAgICAgICAgIEBhc3NpZ24geyB4LCB9XG4gICAgICAgICAgcmV0dXJuIHRydWUgaWYgTnVtYmVyLmlzU2FmZUludGVnZXIgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIGEgbm9uLWludGVnZXIgbnVtYmVyXCIsIHsgZnJhY3Rpb246IHggJSAxLCB9IGlmIE51bWJlci5pc0Zpbml0ZSB4XG4gICAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXZlbl9pbnRlZ2VyOiAoIHggKSAtPlxuICAgICAgICAgIEBhc3NpZ24geyBtZTogJ2V2ZW5faW50ZWdlcicsIH1cbiAgICAgICAgICB1bmxlc3MgQFQuaW50ZWdlci5kbV9pc2EgQGRhdGEsIHsgbWU6ICdpbnRlZ2VyX21lJywgbWVzc2FnZTogJ21lc3NhZ2VfZnJvbV9pbnRlZ2VyJywgfSwgeFxuICAgICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJub3QgYW4gaW50ZWdlcjogI3tycHIgQGRhdGEubWVzc2FnZV9mcm9tX2ludGVnZXJ9XCIgKVxuICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwiZGV0ZWN0ZWQgcmVtYWluZGVyXCIgKSB1bmxlc3MgKCB4ICUlIDIgKSBpcyAwXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgVCA9IG5ldyBNeV90eXBlc3BhY2UoKVxuICAgICAgVC5ldmVuX2ludGVnZXIuaXNhICd3aGF0PydcbiAgICAgIEBlcSAoIM6pYmJudHRfXzE3ID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgKSwgeyBtZTogJ2ludGVnZXInLCB4OiAnd2hhdD8nLCBtZXNzYWdlOiBcIid3aGF0PycgaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCIgfVxuICAgICAgQGVxICggzqliYm50dF9fMTggPSAtPiBULmV2ZW5faW50ZWdlci5kYXRhICApLCB7XG4gICAgICAgIG1lOiAgICAgICAgICAgICAgICAgICAgICdldmVuX2ludGVnZXInLFxuICAgICAgICBpbnRlZ2VyX21lOiAgICAgICAgICAgICAnaW50ZWdlcicsXG4gICAgICAgIHg6ICAgICAgICAgICAgICAgICAgICAgICd3aGF0PycsXG4gICAgICAgIG1lc3NhZ2VfZnJvbV9pbnRlZ2VyOiAgIFwiJ3doYXQ/JyBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIixcbiAgICAgICAgbWVzc2FnZTogICAgICAgICAgICAgICAgXCJcIlwibm90IGFuIGludGVnZXI6IFwiJ3doYXQ/JyBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcXFwiXCJcIlwiLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFQuZXZlbl9pbnRlZ2VyLmlzYSAyNlxuICAgICAgZGVidWcgJ86pYmJudHRfXzE5JywgVC5pbnRlZ2VyLmRhdGFcbiAgICAgIGRlYnVnICfOqWJibnR0X18yMCcsIFQuZXZlbl9pbnRlZ2VyLmRhdGFcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjbGFzcyBNeV90eXBlc3BhY2UgZXh0ZW5kcyBUeXBlc3BhY2VcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAaW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICBAYXNzaWduIHsgbWU6ICdpbnRlZ2VyJywgfVxuICAgICAgICAgIEBhc3NpZ24geyB4LCB9XG4gICAgICAgICAgcmV0dXJuIHRydWUgaWYgTnVtYmVyLmlzU2FmZUludGVnZXIgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIGEgbm9uLWludGVnZXIgbnVtYmVyXCIsIHsgZnJhY3Rpb246IHggJSAxLCB9IGlmIE51bWJlci5pc0Zpbml0ZSB4XG4gICAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXZlbl9pbnRlZ2VyOiAoIHggKSAtPlxuICAgICAgICAgIEBhc3NpZ24geyBtZTogJ2V2ZW5faW50ZWdlcicsIH1cbiAgICAgICAgICB1bmxlc3MgQFQuaW50ZWdlci5kbV9pc2EgQGRhdGEsIHsgbWU6ICdpbnRlZ2VyX21lJywgbWVzc2FnZTogJ21lc3NhZ2VfZnJvbV9pbnRlZ2VyJywgfSwgeFxuICAgICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJub3QgYW4gaW50ZWdlcjogI3tycHIgQGRhdGEubWVzc2FnZV9mcm9tX2ludGVnZXJ9XCIgKVxuICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwiZGV0ZWN0ZWQgcmVtYWluZGVyXCIgKSB1bmxlc3MgKCB4ICUlIDIgKSBpcyAwXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgVCA9IG5ldyBNeV90eXBlc3BhY2UoKVxuICAgICAgVC5ldmVuX2ludGVnZXIuaXNhICd3aGF0PydcbiAgICAgIEBlcSAoIM6pYmJudHRfXzIxID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgKSwgeyBtZTogJ2ludGVnZXInLCB4OiAnd2hhdD8nLCBtZXNzYWdlOiBcIid3aGF0PycgaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCIgfVxuICAgICAgQGVxICggzqliYm50dF9fMjIgPSAtPiBULmV2ZW5faW50ZWdlci5kYXRhICApLCB7XG4gICAgICAgIG1lOiAgICAgICAgICAgICAgICAgICAgICdldmVuX2ludGVnZXInLFxuICAgICAgICBpbnRlZ2VyX21lOiAgICAgICAgICAgICAnaW50ZWdlcicsXG4gICAgICAgIHg6ICAgICAgICAgICAgICAgICAgICAgICd3aGF0PycsXG4gICAgICAgIG1lc3NhZ2VfZnJvbV9pbnRlZ2VyOiAgIFwiJ3doYXQ/JyBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIixcbiAgICAgICAgbWVzc2FnZTogICAgICAgICAgICAgICAgXCJcIlwibm90IGFuIGludGVnZXI6IFwiJ3doYXQ/JyBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcXFwiXCJcIlwiLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFQuZXZlbl9pbnRlZ2VyLmlzYSAyNlxuICAgICAgZGVidWcgJ86pYmJudHRfXzIzJywgVC5pbnRlZ2VyLmRhdGFcbiAgICAgIGRlYnVnICfOqWJibnR0X18yNCcsIFQuZXZlbl9pbnRlZ2VyLmRhdGFcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbmFub3R5cGVzX3YyX3BhcmFtZXRyaXplZF90eXBlczogLT5cbiAgICB7IFR5cGUsXG4gICAgICBUeXBlc3BhY2UsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfbmFub3R5cGVzX3YyKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjbGFzcyBNeV90eXBlc3BhY2UgZXh0ZW5kcyBUeXBlc3BhY2VcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAaW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICBAYXNzaWduIHsgeCwgfVxuICAgICAgICAgIHJldHVybiB0cnVlIGlmIE51bWJlci5pc1NhZmVJbnRlZ2VyIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlclwiLCB7IGZyYWN0aW9uOiB4ICUgMSwgfSBpZiBOdW1iZXIuaXNGaW5pdGUgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGV2ZW5faW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcIiN7cnByIHh9IGlzbid0IGFuIGludGVnZXJcIiAgKSB1bmxlc3MgQFQuaW50ZWdlci5pc2EgeFxuICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwiI3tycHIgeH0gaXNuJ3QgZXZlblwiICAgICAgICApIHVubGVzcyAoIHggJSUgMiApIGlzIDBcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBsaXN0OiAoIHggKSAtPiBBcnJheS5pc0FycmF5IHhcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAbGlzdF9vZjogKCB4LCBlbGVtZW50X3R5cGUgPSBudWxsICkgLT5cbiAgICAgICAgICAjIGluZm8gJ86pYmJudHRfXzI1JywgJ2xpc3Rfb2YnLCB7IHgsIGVsZW1lbnRfdHlwZSwgfVxuICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwibm90IGEgbGlzdFwiICkgdW5sZXNzIEBULmxpc3QuaXNhIHhcbiAgICAgICAgICByZXR1cm4gdHJ1ZSB1bmxlc3MgZWxlbWVudF90eXBlP1xuICAgICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgZm9yIGVsZW1lbnQsIGlkeCBpbiB4XG4gICAgICAgICAgICB1bmxlc3MgZWxlbWVudF90eXBlLmlzYSBlbGVtZW50XG4gICAgICAgICAgICAgIG1lc3NhZ2UgICA9IFwiZWxlbWVudCBhdCBpbmRleCAje2lkeH0gaXNuJ3QgYSAje2VsZW1lbnRfdHlwZS5mdWxsX25hbWV9XCJcbiAgICAgICAgICAgICAgbWVzc2FnZSAgKz0gXCIg4oCTICN7ZWxlbWVudF90eXBlLmRhdGEubWVzc2FnZX1cIiBpZiBlbGVtZW50X3R5cGU/LmRhdGE/Lm1lc3NhZ2U/XG4gICAgICAgICAgICAgIHJldHVybiAoIEBmYWlsIG1lc3NhZ2UgKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFQgPSBuZXcgTXlfdHlwZXNwYWNlKClcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgd2hpc3BlciAnzqliYm50dF9fMjYnLCAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICAgICAgICBoZWxwICfOqWJibnR0X18yNycsIFQubGlzdF9vZi5uYW1lXG4gICAgICAgIGhlbHAgJ86pYmJudHRfXzI4JywgVC5saXN0X29mLmZ1bGxfbmFtZVxuICAgICAgICBoZWxwICfOqWJibnR0X18yOScsIFQubGlzdF9vZi5pc2EgWyA1LCBdLCBULmludGVnZXJcbiAgICAgICAgaW5mbyAnzqliYm50dF9fMzAnLCBULmxpc3Rfb2YuaW5wdXRzXG4gICAgICAgIGluZm8gJ86pYmJudHRfXzMxJywgVC5saXN0X29mLmlucHV0c1sgMCBdXG4gICAgICAgIGhlbHAgJ86pYmJudHRfXzMyJywgVC5saXN0X29mLmZ1bGxfbmFtZVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICB3aGlzcGVyICfOqWJibnR0X18zMycsICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICAgICAgIGhlbHAgJ86pYmJudHRfXzM0JywgVC5saXN0LmlzYSAgICBbIDIsIDQsIDYsIF1cbiAgICAgICAgaGVscCAnzqliYm50dF9fMzUnLCBULmxpc3Rfb2YuaXNhIFsgMiwgNCwgNiwgXTsgICAgICAgICAgICAgICAgIHdhcm4gJ86pYmJudHRfXzM2JywgVC5saXN0X29mLmRhdGFcbiAgICAgICAgaGVscCAnzqliYm50dF9fMzcnLCBULmxpc3Rfb2YuaXNhIFsgMiwgNCwgNiwgXSwgVC5ldmVuX2ludGVnZXI7IHdhcm4gJ86pYmJudHRfXzM4JywgVC5saXN0X29mLmRhdGFcbiAgICAgICAgaGVscCAnzqliYm50dF9fMzknLCBULmxpc3Rfb2YuaXNhIFsgMiwgNCwgNywgXSwgVC5ldmVuX2ludGVnZXI7IHdhcm4gJ86pYmJudHRfXzQwJywgVC5saXN0X29mLmRhdGFcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgd2hpc3BlciAnzqliYm50dF9fNDEnLCAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICAgICAgICBkYXRhID0ge31cbiAgICAgICAgaGVscCAnzqliYm50dF9fNDInLCBULmxpc3Rfb2YuZG1faXNhIGRhdGEsIHsgbWVzc2FnZTogJ21zZycsIH0sIFsgMiwgNCwgNywgXSwgVC5ldmVuX2ludGVnZXJcbiAgICAgICAgQGVxICAgICAoIM6pYmJudHRfXzQzID0gLT4gVC5saXN0X29mLmRhdGEgKSwgeyBtZXNzYWdlOiBcImVsZW1lbnQgYXQgaW5kZXggMiBpc24ndCBhIGV2ZW5faW50ZWdlciDigJMgNyBpc24ndCBldmVuXCIgfVxuICAgICAgICBAZXEgICAgICggzqliYm50dF9fNDQgPSAtPiBkYXRhICAgICAgICAgICApLCB7ICAgICBtc2c6IFwiZWxlbWVudCBhdCBpbmRleCAyIGlzbid0IGEgZXZlbl9pbnRlZ2VyIOKAkyA3IGlzbid0IGV2ZW5cIiB9XG4gICAgICAgIHRyeSBULmxpc3Rfb2YudmFsaWRhdGUgWyAyLCA0LCA3LCBdLCAgVC5ldmVuX2ludGVnZXIgY2F0Y2ggZSB0aGVuIHdhcm4gJ86pYmJudHRfXzQ1JywgcmV2ZXJzZSBlLm1lc3NhZ2VcbiAgICAgICAgdHJ5IFQubGlzdF9vZi52YWxpZGF0ZSB0cnVlLCAgICAgICAgICBULmV2ZW5faW50ZWdlciBjYXRjaCBlIHRoZW4gd2FybiAnzqliYm50dF9fNDYnLCByZXZlcnNlIGUubWVzc2FnZVxuICAgICAgICB0cnkgVC5saXN0X29mLnZhbGlkYXRlIFtdLCAgICAgICAgICAgIFQuZXZlbl9pbnRlZ2VyIGNhdGNoIGUgdGhlbiB3YXJuICfOqWJibnR0X180NycsIHJldmVyc2UgZS5tZXNzYWdlXG4gICAgICAgIHRyeSBULmxpc3Rfb2YudmFsaWRhdGUgWyAxLjMsIF0sICAgICAgVC5ldmVuX2ludGVnZXIgY2F0Y2ggZSB0aGVuIHdhcm4gJ86pYmJudHRfXzQ4JywgcmV2ZXJzZSBlLm1lc3NhZ2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGF0YSA9IHt9XG4gICAgICAgIEB0aHJvd3MgKCDOqWJibnR0X180OSA9IC0+IFQubGlzdF9vZi5kbV92YWxpZGF0ZSBkYXRhLCB7IG1lc3NhZ2U6ICdtc2cnLCB9LCBbIDIsIDQsIDcsIF0sIFQuZXZlbl9pbnRlZ2VyICksIC9ub3QgYSB2YWxpZCBsaXN0X29mL1xuICAgICAgICBAZXEgICAgICggzqliYm50dF9fNTAgPSAtPiBkYXRhICksIHsgbXNnOiBcImVsZW1lbnQgYXQgaW5kZXggMiBpc24ndCBhIGV2ZW5faW50ZWdlciDigJMgNyBpc24ndCBldmVuXCIgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYXRhID0ge31cbiAgICAgICAgQGVxICAgICAoIM6pYmJudHRfXzUxID0gLT4gVC5ldmVuX2ludGVnZXIuZG1faXNhICAgICAgIGRhdGEsIHsgbWVzc2FnZTogJ21zZycsIH0sIDEyMzQ1NiApLCB0cnVlXG4gICAgICAgIEBlcSAgICAgKCDOqWJibnR0X181MiA9IC0+IGRhdGEgKSwge31cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGF0YSA9IHt9XG4gICAgICAgIEBlcSAgICAgKCDOqWJibnR0X181MyA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRtX3ZhbGlkYXRlICBkYXRhLCB7IG1lc3NhZ2U6ICdtc2cnLCB9LCAxMjM0NTYgKSwgMTIzNDU2XG4gICAgICAgIEBlcSAgICAgKCDOqWJibnR0X181NCA9IC0+IGRhdGEgKSwge31cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGF0YSA9IHt9XG4gICAgICAgIEBlcSAgICAgKCDOqWJibnR0X181NSA9IC0+IFQubGlzdF9vZi5kbV92YWxpZGF0ZSBkYXRhLCB7IG1lc3NhZ2U6ICdtc2cnLCB9LCBbIDIsIDQsIDgsIF0sIFQuZXZlbl9pbnRlZ2VyICksIFsgMiwgNCwgOCwgXVxuICAgICAgICBAZXEgICAgICggzqliYm50dF9fNTYgPSAtPiBkYXRhICksIHt9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG5hbm90eXBlc192Ml92YWxpZGF0aW9uOiAtPlxuICAgIHsgVHlwZSxcbiAgICAgIFR5cGVzcGFjZSwgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9uYW5vdHlwZXNfdjIoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgY2xhc3MgTXlfdHlwZXNwYWNlIGV4dGVuZHMgVHlwZXNwYWNlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBAaW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgQGFzc2lnbiB7IHgsIH1cbiAgICAgICAgcmV0dXJuIHRydWUgaWYgTnVtYmVyLmlzU2FmZUludGVnZXIgeFxuICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlclwiLCB7IGZyYWN0aW9uOiB4ICUgMSwgfSBpZiBOdW1iZXIuaXNGaW5pdGUgeFxuICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIlxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgQHRleHQ6ICggeCApIC0+XG4gICAgICAgIEBhc3NpZ24geyB4LCB9XG4gICAgICAgIHJldHVybiB0cnVlIGlmICggdHlwZW9mIHggKSBpcyAnc3RyaW5nJ1xuICAgICAgICA7ZmFsc2VcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIEBwb2ludDogKCB4ICkgLT5cbiAgICAgICAgQGFzc2lnbiB7IHgsIH1cbiAgICAgICAgcmV0dXJuIHRydWUgaWYgKCBAVC5pbnRlZ2VyLmlzYSB4IClcbiAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgbm90IGFuIGludGVnZXIgYW5kIG5vdCBhIHRleHRcIiAgICAgICAgICB1bmxlc3MgKCBAVC50ZXh0LmlzYSB4IClcbiAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgYSB0ZXh0IGJ1dCBub3Qgd2l0aCBhIHNpbmdsZSBjb2RlcG9pbnRcIiB1bmxlc3MgKCAoIEFycmF5LmZyb20geCApLmxlbmd0aCBpcyAxIClcbiAgICAgICAgO3RydWVcbiAgICAgICAgIyByZXR1cm4gdHJ1ZSBpZiBOdW1iZXIuaXNTYWZlSW50ZWdlciB4XG4gICAgICAgICMgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgYSBub24taW50ZWdlciBudW1iZXJcIiwgeyBmcmFjdGlvbjogeCAlIDEsIH0gaWYgTnVtYmVyLmlzRmluaXRlIHhcbiAgICAgICAgIyByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIlxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIFQgPSBuZXcgTXlfdHlwZXNwYWNlKClcbiAgICBkZWJ1ZyAnzqliYm50dF9fNTcnLCBULmludGVnZXJcbiAgICBkZWJ1ZyAnzqliYm50dF9fNTgnLCBULmludGVnZXIuaXNhXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBAZXEgKCDOqWJibnR0X181OSA9IC0+IFQuaW50ZWdlci5pc2EgICAgICAgICAgIDUgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqliYm50dF9fNjAgPSAtPiBULnBvaW50LmlzYSAgICAgICAgICAgICA1ICAgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pYmJudHRfXzYxID0gLT4gVC5wb2ludC5pc2EgICAgICAgICAgICAgJ2EnICAgICAgICksIHRydWVcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6pYmJudHRfXzYyID0gLT4gVC5pbnRlZ2VyLmlzYSAgICAgICAgICAgNTUuNSAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqliYm50dF9fNjMgPSAtPiBULnBvaW50LmlzYSAgICAgICAgICAgICA1NS41ICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWJibnR0X182NCA9IC0+IFQucG9pbnQuaXNhICAgICAgICAgICAgICdhYmMnICAgICApLCBmYWxzZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqliYm50dF9fNjUgPSAtPiBULmludGVnZXIudmFsaWRhdGUgICAgICA1ICAgICAgICAgKSwgNVxuICAgIEBlcSAoIM6pYmJudHRfXzY2ID0gLT4gVC5wb2ludC52YWxpZGF0ZSAgICAgICAgNSAgICAgICAgICksIDVcbiAgICBAZXEgKCDOqWJibnR0X182NyA9IC0+IFQucG9pbnQudmFsaWRhdGUgICAgICAgICdhJyAgICAgICApLCAnYSdcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6pYmJudHRfXzY4ID0gLT4gdHJ5IFQuaW50ZWdlci52YWxpZGF0ZSAgNTUuNSAgY2F0Y2ggZSB0aGVuIHJldHVybiBlLm1lc3NhZ2UgKSwgXCJcIlwiKGludGVnZXIpIG5vdCBhIHZhbGlkIGludGVnZXI6IDU1LjUg4oCTIDU1LjUgaXMgYSBub24taW50ZWdlciBudW1iZXJcIlwiXCJcbiAgICBAZXEgKCDOqWJibnR0X182OSA9IC0+IHRyeSBULnBvaW50LnZhbGlkYXRlICAgIDU1LjUgIGNhdGNoIGUgdGhlbiByZXR1cm4gZS5tZXNzYWdlICksIFwiXCJcIihwb2ludCkgbm90IGEgdmFsaWQgcG9pbnQ6IDU1LjUg4oCTIDU1LjUgaXMgbm90IGFuIGludGVnZXIgYW5kIG5vdCBhIHRleHRcIlwiXCJcbiAgICBAZXEgKCDOqWJibnR0X183MCA9IC0+IHRyeSBULnBvaW50LnZhbGlkYXRlICAgICdhYmMnIGNhdGNoIGUgdGhlbiByZXR1cm4gZS5tZXNzYWdlICksIFwiXCJcIihwb2ludCkgbm90IGEgdmFsaWQgcG9pbnQ6IGFiYyDigJMgJ2FiYycgaXMgYSB0ZXh0IGJ1dCBub3Qgd2l0aCBhIHNpbmdsZSBjb2RlcG9pbnRcIlwiXCJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEB0aHJvd3MgKCDOqWJibnR0X183MSA9IC0+IFQuaW50ZWdlci52YWxpZGF0ZSAgNTUuNSAgICAgICksIC9ub3QgYSB2YWxpZCBpbnRlZ2VyL1xuICAgIEB0aHJvd3MgKCDOqWJibnR0X183MiA9IC0+IFQucG9pbnQudmFsaWRhdGUgICAgNTUuNSAgICAgICksIC9ub3QgYSB2YWxpZCBwb2ludC9cbiAgICBAdGhyb3dzICggzqliYm50dF9fNzMgPSAtPiBULnBvaW50LnZhbGlkYXRlICAgICdhYmMnICAgICApLCAvbm90IGEgdmFsaWQgcG9pbnQvXG4gICAgQHRocm93cyAoIM6pYmJudHRfXzc0ID0gLT4gVC5wb2ludC52YWxpZGF0ZSAgICAnJyAgICAgICAgKSwgL25vdCBhIHZhbGlkIHBvaW50L1xuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IHRydWUsIHJlcG9ydF9jaGVja3M6IHRydWUsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgQHRhc2tzXG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0eXBlX2RhdGFfaGFuZGxpbmc6IEB0YXNrcy50eXBlX2RhdGFfaGFuZGxpbmcsIH1cbiJdfQ==
