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

  SFMODULES = require('../../../apps/bricabrac-single-file-modules');

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
        show_passes: false,
        report_checks: false
      };
      return (new Test(guytest_cfg)).test(this.tasks);
    })();
  }

  // ( new Test guytest_cfg ).test { type_data_handling: @tasks.type_data_handling, }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtbmFub3R5cGVzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBO0lBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixXQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsT0FIRixFQUlFLEdBSkYsQ0FBQSxHQUk0QixHQUFHLENBQUMsR0FKaEMsRUFaQTs7O0VBa0JBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLDZDQUFSLEVBckI1Qjs7O0VBeUJBLElBQUMsQ0FBQSxLQUFELEdBR0UsQ0FBQTs7SUFBQSxrQkFBQSxFQUFvQixRQUFBLENBQUEsQ0FBQTtBQUN0QixVQUFBLElBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxJQUFGLEVBQ0UsU0FERixDQUFBLEdBQzhCLFNBQVMsQ0FB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LENBQWxDO0FBQ0EsaUJBQU87UUFKTixDQUFBLElBNUVUOztBQWtGTSxlQUFPO01BbkZOLENBQUE7QUFvRkgsYUFBTztJQXhGd0I7RUE3SGpDLEVBNUJGOzs7RUFxUEEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBO01BQUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO2FBQ2QsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixJQUFDLENBQUEsS0FBL0I7SUFIc0MsQ0FBQSxJQUF4Qzs7O0VBclBBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2hvbGxlcml0aCdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0YXNrcyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB0eXBlX2RhdGFfaGFuZGxpbmc6IC0+XG4gICAgeyBUeXBlLFxuICAgICAgVHlwZXNwYWNlLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX25hbm90eXBlcygpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2xhc3MgTXlfdHlwZXNwYWNlIGV4dGVuZHMgVHlwZXNwYWNlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgcmV0dXJuIHRydWUgaWYgTnVtYmVyLmlzU2FmZUludGVnZXIgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIGEgbm9uLWludGVnZXIgbnVtYmVyXCIsIHsgZnJhY3Rpb246IHggJSAxLCB9IGlmIE51bWJlci5pc0Zpbml0ZSB4XG4gICAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXZlbl9pbnRlZ2VyOiAoIHggKSAtPlxuICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwibm90IGFuIGludGVnZXJcIiAgICAgKSB1bmxlc3MgQFQuaW50ZWdlci5pc2EgeFxuICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwiZGV0ZWN0ZWQgcmVtYWluZGVyXCIgKSB1bmxlc3MgKCB4ICUlIDIgKSBpcyAwXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgVCA9IG5ldyBNeV90eXBlc3BhY2UoKVxuICAgICAgQGVxICggzqliYm50dF9fXzEgPSAtPiBULmludGVnZXIuaXNhIDk5ODcgICAgICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJudHRfX18yID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgICAgICAgICApLCB7fVxuICAgICAgQGVxICggzqliYm50dF9fXzMgPSAtPiBULmludGVnZXIuaXNhIDk5ODcuMTI1ICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWJibnR0X19fNCA9IC0+IFQuaW50ZWdlci5kYXRhICAgICAgICAgICAgICAgKSwgeyBtZXNzYWdlOiAnOTk4Ny4xMjUgaXMgYSBub24taW50ZWdlciBudW1iZXInLCBmcmFjdGlvbjogMC4xMjUsIH1cbiAgICAgIEBlcSAoIM6pYmJudHRfX181ID0gLT4gVC5ldmVuX2ludGVnZXIuaXNhIDMzLjEyNSAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqliYm50dF9fXzYgPSAtPiBULmludGVnZXIuZGF0YSAgICAgICAgICAgICAgICksIHsgbWVzc2FnZTogJzMzLjEyNSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlcicsIGZyYWN0aW9uOiAwLjEyNSwgfVxuICAgICAgQGVxICggzqliYm50dF9fXzcgPSAtPiBULmV2ZW5faW50ZWdlci5kYXRhICAgICAgICAgICksIHsgbWVzc2FnZTogJ25vdCBhbiBpbnRlZ2VyJyB9XG4gICAgICBAZXEgKCDOqWJibnR0X19fOCA9IC0+IFQuZXZlbl9pbnRlZ2VyLmlzYSA3NzcgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pYmJudHRfX185ID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgICAgICAgICApLCB7fVxuICAgICAgQGVxICggzqliYm50dF9fMTAgPSAtPiBULmV2ZW5faW50ZWdlci5kYXRhICAgICAgICAgICksIHsgbWVzc2FnZTogJ2RldGVjdGVkIHJlbWFpbmRlcicgfVxuICAgICAgQGVxICggzqliYm50dF9fMTEgPSAtPiBULmV2ZW5faW50ZWdlci5pc2EgODg4ICAgICAgICksIHRydWVcbiAgICAgIEBlcSAoIM6pYmJudHRfXzEyID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgICAgICAgICApLCB7fVxuICAgICAgQGVxICggzqliYm50dF9fMTMgPSAtPiBULmV2ZW5faW50ZWdlci5kYXRhICAgICAgICAgICksIHt9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2xhc3MgTXlfdHlwZXNwYWNlIGV4dGVuZHMgVHlwZXNwYWNlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgQGFzc2lnbiB7IHgsIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZSBpZiBOdW1iZXIuaXNTYWZlSW50ZWdlciB4XG4gICAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgYSBub24taW50ZWdlciBudW1iZXJcIiwgeyBmcmFjdGlvbjogeCAlIDEsIH0gaWYgTnVtYmVyLmlzRmluaXRlIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBldmVuX2ludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgIyB1bmxlc3MgQFQuaW50ZWdlci5pc2EgeCwgQGRhdGFcbiAgICAgICAgICAjICAgZGVidWcgJ86pYmJudHRfXzE0JywgQGRhdGFcbiAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcIm5vdCBhbiBpbnRlZ2VyXCIgICAgICkgdW5sZXNzIEBULmludGVnZXIuaXNhIHgsIEBkYXRhXG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJkZXRlY3RlZCByZW1haW5kZXJcIiApIHVubGVzcyAoIHggJSUgMiApIGlzIDBcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBUID0gbmV3IE15X3R5cGVzcGFjZSgpXG4gICAgICBULmV2ZW5faW50ZWdlci5pc2EgJ3doYXQ/J1xuICAgICAgQGVxICggzqliYm50dF9fMTUgPSAtPiBULmludGVnZXIuZGF0YSAgICAgICApLCB7IHg6ICd3aGF0PycsIG1lc3NhZ2U6IFwiJ3doYXQ/JyBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIiwgfVxuICAgICAgQGVxICggzqliYm50dF9fMTYgPSAtPiBULmV2ZW5faW50ZWdlci5kYXRhICApLCB7IG1lc3NhZ2U6IFwibm90IGFuIGludGVnZXJcIiwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNsYXNzIE15X3R5cGVzcGFjZSBleHRlbmRzIFR5cGVzcGFjZVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBpbnRlZ2VyOiAoIHggKSAtPlxuICAgICAgICAgIEBhc3NpZ24geyBtZTogJ2ludGVnZXInLCB9XG4gICAgICAgICAgQGFzc2lnbiB7IHgsIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZSBpZiBOdW1iZXIuaXNTYWZlSW50ZWdlciB4XG4gICAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgYSBub24taW50ZWdlciBudW1iZXJcIiwgeyBmcmFjdGlvbjogeCAlIDEsIH0gaWYgTnVtYmVyLmlzRmluaXRlIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBldmVuX2ludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgQGFzc2lnbiB7IG1lOiAnZXZlbl9pbnRlZ2VyJywgfVxuICAgICAgICAgIHVubGVzcyBAVC5pbnRlZ2VyLmRtX2lzYSBAZGF0YSwgeyBtZTogJ2ludGVnZXJfbWUnLCBtZXNzYWdlOiAnbWVzc2FnZV9mcm9tX2ludGVnZXInLCB9LCB4XG4gICAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcIm5vdCBhbiBpbnRlZ2VyOiAje3JwciBAZGF0YS5tZXNzYWdlX2Zyb21faW50ZWdlcn1cIiApXG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJkZXRlY3RlZCByZW1haW5kZXJcIiApIHVubGVzcyAoIHggJSUgMiApIGlzIDBcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBUID0gbmV3IE15X3R5cGVzcGFjZSgpXG4gICAgICBULmV2ZW5faW50ZWdlci5pc2EgJ3doYXQ/J1xuICAgICAgQGVxICggzqliYm50dF9fMTcgPSAtPiBULmludGVnZXIuZGF0YSAgICAgICApLCB7IG1lOiAnaW50ZWdlcicsIHg6ICd3aGF0PycsIG1lc3NhZ2U6IFwiJ3doYXQ/JyBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIiB9XG4gICAgICBAZXEgKCDOqWJibnR0X18xOCA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICksIHtcbiAgICAgICAgbWU6ICAgICAgICAgICAgICAgICAgICAgJ2V2ZW5faW50ZWdlcicsXG4gICAgICAgIGludGVnZXJfbWU6ICAgICAgICAgICAgICdpbnRlZ2VyJyxcbiAgICAgICAgeDogICAgICAgICAgICAgICAgICAgICAgJ3doYXQ/JyxcbiAgICAgICAgbWVzc2FnZV9mcm9tX2ludGVnZXI6ICAgXCInd2hhdD8nIGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiLFxuICAgICAgICBtZXNzYWdlOiAgICAgICAgICAgICAgICBcIlwiXCJub3QgYW4gaW50ZWdlcjogXCInd2hhdD8nIGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclxcXCJcIlwiXCIsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgVC5ldmVuX2ludGVnZXIuaXNhIDI2XG4gICAgICBkZWJ1ZyAnzqliYm50dF9fMTknLCBULmludGVnZXIuZGF0YVxuICAgICAgZGVidWcgJ86pYmJudHRfXzIwJywgVC5ldmVuX2ludGVnZXIuZGF0YVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNsYXNzIE15X3R5cGVzcGFjZSBleHRlbmRzIFR5cGVzcGFjZVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBpbnRlZ2VyOiAoIHggKSAtPlxuICAgICAgICAgIEBhc3NpZ24geyBtZTogJ2ludGVnZXInLCB9XG4gICAgICAgICAgQGFzc2lnbiB7IHgsIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZSBpZiBOdW1iZXIuaXNTYWZlSW50ZWdlciB4XG4gICAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgYSBub24taW50ZWdlciBudW1iZXJcIiwgeyBmcmFjdGlvbjogeCAlIDEsIH0gaWYgTnVtYmVyLmlzRmluaXRlIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBldmVuX2ludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgQGFzc2lnbiB7IG1lOiAnZXZlbl9pbnRlZ2VyJywgfVxuICAgICAgICAgIHVubGVzcyBAVC5pbnRlZ2VyLmRtX2lzYSBAZGF0YSwgeyBtZTogJ2ludGVnZXJfbWUnLCBtZXNzYWdlOiAnbWVzc2FnZV9mcm9tX2ludGVnZXInLCB9LCB4XG4gICAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcIm5vdCBhbiBpbnRlZ2VyOiAje3JwciBAZGF0YS5tZXNzYWdlX2Zyb21faW50ZWdlcn1cIiApXG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJkZXRlY3RlZCByZW1haW5kZXJcIiApIHVubGVzcyAoIHggJSUgMiApIGlzIDBcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBUID0gbmV3IE15X3R5cGVzcGFjZSgpXG4gICAgICBULmV2ZW5faW50ZWdlci5pc2EgJ3doYXQ/J1xuICAgICAgQGVxICggzqliYm50dF9fMjEgPSAtPiBULmludGVnZXIuZGF0YSAgICAgICApLCB7IG1lOiAnaW50ZWdlcicsIHg6ICd3aGF0PycsIG1lc3NhZ2U6IFwiJ3doYXQ/JyBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIiB9XG4gICAgICBAZXEgKCDOqWJibnR0X18yMiA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICksIHtcbiAgICAgICAgbWU6ICAgICAgICAgICAgICAgICAgICAgJ2V2ZW5faW50ZWdlcicsXG4gICAgICAgIGludGVnZXJfbWU6ICAgICAgICAgICAgICdpbnRlZ2VyJyxcbiAgICAgICAgeDogICAgICAgICAgICAgICAgICAgICAgJ3doYXQ/JyxcbiAgICAgICAgbWVzc2FnZV9mcm9tX2ludGVnZXI6ICAgXCInd2hhdD8nIGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiLFxuICAgICAgICBtZXNzYWdlOiAgICAgICAgICAgICAgICBcIlwiXCJub3QgYW4gaW50ZWdlcjogXCInd2hhdD8nIGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclxcXCJcIlwiXCIsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgVC5ldmVuX2ludGVnZXIuaXNhIDI2XG4gICAgICBkZWJ1ZyAnzqliYm50dF9fMjMnLCBULmludGVnZXIuZGF0YVxuICAgICAgZGVidWcgJ86pYmJudHRfXzI0JywgVC5ldmVuX2ludGVnZXIuZGF0YVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBuYW5vdHlwZXNfdjJfcGFyYW1ldHJpemVkX3R5cGVzOiAtPlxuICAgIHsgVHlwZSxcbiAgICAgIFR5cGVzcGFjZSwgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9uYW5vdHlwZXNfdjIoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNsYXNzIE15X3R5cGVzcGFjZSBleHRlbmRzIFR5cGVzcGFjZVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBpbnRlZ2VyOiAoIHggKSAtPlxuICAgICAgICAgIEBhc3NpZ24geyB4LCB9XG4gICAgICAgICAgcmV0dXJuIHRydWUgaWYgTnVtYmVyLmlzU2FmZUludGVnZXIgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIGEgbm9uLWludGVnZXIgbnVtYmVyXCIsIHsgZnJhY3Rpb246IHggJSAxLCB9IGlmIE51bWJlci5pc0Zpbml0ZSB4XG4gICAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXZlbl9pbnRlZ2VyOiAoIHggKSAtPlxuICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwiI3tycHIgeH0gaXNuJ3QgYW4gaW50ZWdlclwiICApIHVubGVzcyBAVC5pbnRlZ2VyLmlzYSB4XG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCIje3JwciB4fSBpc24ndCBldmVuXCIgICAgICAgICkgdW5sZXNzICggeCAlJSAyICkgaXMgMFxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGxpc3Q6ICggeCApIC0+IEFycmF5LmlzQXJyYXkgeFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBsaXN0X29mOiAoIHgsIGVsZW1lbnRfdHlwZSA9IG51bGwgKSAtPlxuICAgICAgICAgICMgaW5mbyAnzqliYm50dF9fMjUnLCAnbGlzdF9vZicsIHsgeCwgZWxlbWVudF90eXBlLCB9XG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJub3QgYSBsaXN0XCIgKSB1bmxlc3MgQFQubGlzdC5pc2EgeFxuICAgICAgICAgIHJldHVybiB0cnVlIHVubGVzcyBlbGVtZW50X3R5cGU/XG4gICAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgICBmb3IgZWxlbWVudCwgaWR4IGluIHhcbiAgICAgICAgICAgIHVubGVzcyBlbGVtZW50X3R5cGUuaXNhIGVsZW1lbnRcbiAgICAgICAgICAgICAgbWVzc2FnZSAgID0gXCJlbGVtZW50IGF0IGluZGV4ICN7aWR4fSBpc24ndCBhICN7ZWxlbWVudF90eXBlLmZ1bGxfbmFtZX1cIlxuICAgICAgICAgICAgICBtZXNzYWdlICArPSBcIiDigJMgI3tlbGVtZW50X3R5cGUuZGF0YS5tZXNzYWdlfVwiIGlmIGVsZW1lbnRfdHlwZT8uZGF0YT8ubWVzc2FnZT9cbiAgICAgICAgICAgICAgcmV0dXJuICggQGZhaWwgbWVzc2FnZSApXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgVCA9IG5ldyBNeV90eXBlc3BhY2UoKVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICB3aGlzcGVyICfOqWJibnR0X18yNicsICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICAgICAgIGhlbHAgJ86pYmJudHRfXzI3JywgVC5saXN0X29mLm5hbWVcbiAgICAgICAgaGVscCAnzqliYm50dF9fMjgnLCBULmxpc3Rfb2YuZnVsbF9uYW1lXG4gICAgICAgIGhlbHAgJ86pYmJudHRfXzI5JywgVC5saXN0X29mLmlzYSBbIDUsIF0sIFQuaW50ZWdlclxuICAgICAgICBpbmZvICfOqWJibnR0X18zMCcsIFQubGlzdF9vZi5pbnB1dHNcbiAgICAgICAgaW5mbyAnzqliYm50dF9fMzEnLCBULmxpc3Rfb2YuaW5wdXRzWyAwIF1cbiAgICAgICAgaGVscCAnzqliYm50dF9fMzInLCBULmxpc3Rfb2YuZnVsbF9uYW1lXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHdoaXNwZXIgJ86pYmJudHRfXzMzJywgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgICAgICAgaGVscCAnzqliYm50dF9fMzQnLCBULmxpc3QuaXNhICAgIFsgMiwgNCwgNiwgXVxuICAgICAgICBoZWxwICfOqWJibnR0X18zNScsIFQubGlzdF9vZi5pc2EgWyAyLCA0LCA2LCBdOyAgICAgICAgICAgICAgICAgd2FybiAnzqliYm50dF9fMzYnLCBULmxpc3Rfb2YuZGF0YVxuICAgICAgICBoZWxwICfOqWJibnR0X18zNycsIFQubGlzdF9vZi5pc2EgWyAyLCA0LCA2LCBdLCBULmV2ZW5faW50ZWdlcjsgd2FybiAnzqliYm50dF9fMzgnLCBULmxpc3Rfb2YuZGF0YVxuICAgICAgICBoZWxwICfOqWJibnR0X18zOScsIFQubGlzdF9vZi5pc2EgWyAyLCA0LCA3LCBdLCBULmV2ZW5faW50ZWdlcjsgd2FybiAnzqliYm50dF9fNDAnLCBULmxpc3Rfb2YuZGF0YVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICB3aGlzcGVyICfOqWJibnR0X180MScsICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICAgICAgIGRhdGEgPSB7fVxuICAgICAgICBoZWxwICfOqWJibnR0X180MicsIFQubGlzdF9vZi5kbV9pc2EgZGF0YSwgeyBtZXNzYWdlOiAnbXNnJywgfSwgWyAyLCA0LCA3LCBdLCBULmV2ZW5faW50ZWdlclxuICAgICAgICBAZXEgICAgICggzqliYm50dF9fNDMgPSAtPiBULmxpc3Rfb2YuZGF0YSApLCB7IG1lc3NhZ2U6IFwiZWxlbWVudCBhdCBpbmRleCAyIGlzbid0IGEgZXZlbl9pbnRlZ2VyIOKAkyA3IGlzbid0IGV2ZW5cIiB9XG4gICAgICAgIEBlcSAgICAgKCDOqWJibnR0X180NCA9IC0+IGRhdGEgICAgICAgICAgICksIHsgICAgIG1zZzogXCJlbGVtZW50IGF0IGluZGV4IDIgaXNuJ3QgYSBldmVuX2ludGVnZXIg4oCTIDcgaXNuJ3QgZXZlblwiIH1cbiAgICAgICAgdHJ5IFQubGlzdF9vZi52YWxpZGF0ZSBbIDIsIDQsIDcsIF0sICBULmV2ZW5faW50ZWdlciBjYXRjaCBlIHRoZW4gd2FybiAnzqliYm50dF9fNDUnLCByZXZlcnNlIGUubWVzc2FnZVxuICAgICAgICB0cnkgVC5saXN0X29mLnZhbGlkYXRlIHRydWUsICAgICAgICAgIFQuZXZlbl9pbnRlZ2VyIGNhdGNoIGUgdGhlbiB3YXJuICfOqWJibnR0X180NicsIHJldmVyc2UgZS5tZXNzYWdlXG4gICAgICAgIHRyeSBULmxpc3Rfb2YudmFsaWRhdGUgW10sICAgICAgICAgICAgVC5ldmVuX2ludGVnZXIgY2F0Y2ggZSB0aGVuIHdhcm4gJ86pYmJudHRfXzQ3JywgcmV2ZXJzZSBlLm1lc3NhZ2VcbiAgICAgICAgdHJ5IFQubGlzdF9vZi52YWxpZGF0ZSBbIDEuMywgXSwgICAgICBULmV2ZW5faW50ZWdlciBjYXRjaCBlIHRoZW4gd2FybiAnzqliYm50dF9fNDgnLCByZXZlcnNlIGUubWVzc2FnZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYXRhID0ge31cbiAgICAgICAgQHRocm93cyAoIM6pYmJudHRfXzQ5ID0gLT4gVC5saXN0X29mLmRtX3ZhbGlkYXRlIGRhdGEsIHsgbWVzc2FnZTogJ21zZycsIH0sIFsgMiwgNCwgNywgXSwgVC5ldmVuX2ludGVnZXIgKSwgL25vdCBhIHZhbGlkIGxpc3Rfb2YvXG4gICAgICAgIEBlcSAgICAgKCDOqWJibnR0X181MCA9IC0+IGRhdGEgKSwgeyBtc2c6IFwiZWxlbWVudCBhdCBpbmRleCAyIGlzbid0IGEgZXZlbl9pbnRlZ2VyIOKAkyA3IGlzbid0IGV2ZW5cIiB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRhdGEgPSB7fVxuICAgICAgICBAZXEgICAgICggzqliYm50dF9fNTEgPSAtPiBULmV2ZW5faW50ZWdlci5kbV9pc2EgICAgICAgZGF0YSwgeyBtZXNzYWdlOiAnbXNnJywgfSwgMTIzNDU2ICksIHRydWVcbiAgICAgICAgQGVxICAgICAoIM6pYmJudHRfXzUyID0gLT4gZGF0YSApLCB7fVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYXRhID0ge31cbiAgICAgICAgQGVxICAgICAoIM6pYmJudHRfXzUzID0gLT4gVC5ldmVuX2ludGVnZXIuZG1fdmFsaWRhdGUgIGRhdGEsIHsgbWVzc2FnZTogJ21zZycsIH0sIDEyMzQ1NiApLCAxMjM0NTZcbiAgICAgICAgQGVxICAgICAoIM6pYmJudHRfXzU0ID0gLT4gZGF0YSApLCB7fVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICBkYXRhID0ge31cbiAgICAgICAgQGVxICAgICAoIM6pYmJudHRfXzU1ID0gLT4gVC5saXN0X29mLmRtX3ZhbGlkYXRlIGRhdGEsIHsgbWVzc2FnZTogJ21zZycsIH0sIFsgMiwgNCwgOCwgXSwgVC5ldmVuX2ludGVnZXIgKSwgWyAyLCA0LCA4LCBdXG4gICAgICAgIEBlcSAgICAgKCDOqWJibnR0X181NiA9IC0+IGRhdGEgKSwge31cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEB0YXNrc1xuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdHlwZV9kYXRhX2hhbmRsaW5nOiBAdGFza3MudHlwZV9kYXRhX2hhbmRsaW5nLCB9XG4iXX0=
