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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtbmFub3R5cGVzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBO0lBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixXQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsT0FIRixFQUlFLEdBSkYsQ0FBQSxHQUk0QixHQUFHLENBQUMsR0FKaEMsRUFaQTs7O0VBa0JBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLG1DQUFSLEVBckI1Qjs7O0VBeUJBLElBQUMsQ0FBQSxLQUFELEdBR0UsQ0FBQTs7SUFBQSxrQkFBQSxFQUFvQixRQUFBLENBQUEsQ0FBQTtBQUN0QixVQUFBLElBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxJQUFGLEVBQ0UsU0FERixDQUFBLEdBQzhCLFNBQVMsQ0FB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LENBQWxDO0FBQ0EsaUJBQU87UUFKTixDQUFBLElBNUVUOztBQWtGTSxlQUFPO01BbkZOLENBQUE7QUFvRkgsYUFBTztJQXhGd0I7RUE3SGpDLEVBNUJGOzs7RUFxUEEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBO01BQUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO2FBQ2QsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixJQUFDLENBQUEsS0FBL0I7SUFIc0MsQ0FBQSxJQUF4Qzs7O0VBclBBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2hvbGxlcml0aCdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRhc2tzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHR5cGVfZGF0YV9oYW5kbGluZzogLT5cbiAgICB7IFR5cGUsXG4gICAgICBUeXBlc3BhY2UsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfbmFub3R5cGVzKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjbGFzcyBNeV90eXBlc3BhY2UgZXh0ZW5kcyBUeXBlc3BhY2VcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAaW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICByZXR1cm4gdHJ1ZSBpZiBOdW1iZXIuaXNTYWZlSW50ZWdlciB4XG4gICAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgYSBub24taW50ZWdlciBudW1iZXJcIiwgeyBmcmFjdGlvbjogeCAlIDEsIH0gaWYgTnVtYmVyLmlzRmluaXRlIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBldmVuX2ludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJub3QgYW4gaW50ZWdlclwiICAgICApIHVubGVzcyBAVC5pbnRlZ2VyLmlzYSB4XG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJkZXRlY3RlZCByZW1haW5kZXJcIiApIHVubGVzcyAoIHggJSUgMiApIGlzIDBcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBUID0gbmV3IE15X3R5cGVzcGFjZSgpXG4gICAgICBAZXEgKCDOqWJibnR0X19fMSA9IC0+IFQuaW50ZWdlci5pc2EgOTk4NyAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYm50dF9fXzIgPSAtPiBULmludGVnZXIuZGF0YSAgICAgICAgICAgICAgICksIHt9XG4gICAgICBAZXEgKCDOqWJibnR0X19fMyA9IC0+IFQuaW50ZWdlci5pc2EgOTk4Ny4xMjUgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pYmJudHRfX180ID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgICAgICAgICApLCB7IG1lc3NhZ2U6ICc5OTg3LjEyNSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlcicsIGZyYWN0aW9uOiAwLjEyNSwgfVxuICAgICAgQGVxICggzqliYm50dF9fXzUgPSAtPiBULmV2ZW5faW50ZWdlci5pc2EgMzMuMTI1ICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWJibnR0X19fNiA9IC0+IFQuaW50ZWdlci5kYXRhICAgICAgICAgICAgICAgKSwgeyBtZXNzYWdlOiAnMzMuMTI1IGlzIGEgbm9uLWludGVnZXIgbnVtYmVyJywgZnJhY3Rpb246IDAuMTI1LCB9XG4gICAgICBAZXEgKCDOqWJibnR0X19fNyA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICAgICAgICAgKSwgeyBtZXNzYWdlOiAnbm90IGFuIGludGVnZXInIH1cbiAgICAgIEBlcSAoIM6pYmJudHRfX184ID0gLT4gVC5ldmVuX2ludGVnZXIuaXNhIDc3NyAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqliYm50dF9fXzkgPSAtPiBULmludGVnZXIuZGF0YSAgICAgICAgICAgICAgICksIHt9XG4gICAgICBAZXEgKCDOqWJibnR0X18xMCA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICAgICAgICAgKSwgeyBtZXNzYWdlOiAnZGV0ZWN0ZWQgcmVtYWluZGVyJyB9XG4gICAgICBAZXEgKCDOqWJibnR0X18xMSA9IC0+IFQuZXZlbl9pbnRlZ2VyLmlzYSA4ODggICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYm50dF9fMTIgPSAtPiBULmludGVnZXIuZGF0YSAgICAgICAgICAgICAgICksIHt9XG4gICAgICBAZXEgKCDOqWJibnR0X18xMyA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICAgICAgICAgKSwge31cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjbGFzcyBNeV90eXBlc3BhY2UgZXh0ZW5kcyBUeXBlc3BhY2VcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAaW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICBAYXNzaWduIHsgeCwgfVxuICAgICAgICAgIHJldHVybiB0cnVlIGlmIE51bWJlci5pc1NhZmVJbnRlZ2VyIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlclwiLCB7IGZyYWN0aW9uOiB4ICUgMSwgfSBpZiBOdW1iZXIuaXNGaW5pdGUgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGV2ZW5faW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICAjIHVubGVzcyBAVC5pbnRlZ2VyLmlzYSB4LCBAZGF0YVxuICAgICAgICAgICMgICBkZWJ1ZyAnzqliYm50dF9fMTQnLCBAZGF0YVxuICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwibm90IGFuIGludGVnZXJcIiAgICAgKSB1bmxlc3MgQFQuaW50ZWdlci5pc2EgeCwgQGRhdGFcbiAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcImRldGVjdGVkIHJlbWFpbmRlclwiICkgdW5sZXNzICggeCAlJSAyICkgaXMgMFxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFQgPSBuZXcgTXlfdHlwZXNwYWNlKClcbiAgICAgIFQuZXZlbl9pbnRlZ2VyLmlzYSAnd2hhdD8nXG4gICAgICBAZXEgKCDOqWJibnR0X18xNSA9IC0+IFQuaW50ZWdlci5kYXRhICAgICAgICksIHsgeDogJ3doYXQ/JywgbWVzc2FnZTogXCInd2hhdD8nIGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiLCB9XG4gICAgICBAZXEgKCDOqWJibnR0X18xNiA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICksIHsgbWVzc2FnZTogXCJub3QgYW4gaW50ZWdlclwiLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2xhc3MgTXlfdHlwZXNwYWNlIGV4dGVuZHMgVHlwZXNwYWNlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgQGFzc2lnbiB7IG1lOiAnaW50ZWdlcicsIH1cbiAgICAgICAgICBAYXNzaWduIHsgeCwgfVxuICAgICAgICAgIHJldHVybiB0cnVlIGlmIE51bWJlci5pc1NhZmVJbnRlZ2VyIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlclwiLCB7IGZyYWN0aW9uOiB4ICUgMSwgfSBpZiBOdW1iZXIuaXNGaW5pdGUgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGV2ZW5faW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICBAYXNzaWduIHsgbWU6ICdldmVuX2ludGVnZXInLCB9XG4gICAgICAgICAgdW5sZXNzIEBULmludGVnZXIuZG1faXNhIEBkYXRhLCB7IG1lOiAnaW50ZWdlcl9tZScsIG1lc3NhZ2U6ICdtZXNzYWdlX2Zyb21faW50ZWdlcicsIH0sIHhcbiAgICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwibm90IGFuIGludGVnZXI6ICN7cnByIEBkYXRhLm1lc3NhZ2VfZnJvbV9pbnRlZ2VyfVwiIClcbiAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcImRldGVjdGVkIHJlbWFpbmRlclwiICkgdW5sZXNzICggeCAlJSAyICkgaXMgMFxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFQgPSBuZXcgTXlfdHlwZXNwYWNlKClcbiAgICAgIFQuZXZlbl9pbnRlZ2VyLmlzYSAnd2hhdD8nXG4gICAgICBAZXEgKCDOqWJibnR0X18xNyA9IC0+IFQuaW50ZWdlci5kYXRhICAgICAgICksIHsgbWU6ICdpbnRlZ2VyJywgeDogJ3doYXQ/JywgbWVzc2FnZTogXCInd2hhdD8nIGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiIH1cbiAgICAgIEBlcSAoIM6pYmJudHRfXzE4ID0gLT4gVC5ldmVuX2ludGVnZXIuZGF0YSAgKSwge1xuICAgICAgICBtZTogICAgICAgICAgICAgICAgICAgICAnZXZlbl9pbnRlZ2VyJyxcbiAgICAgICAgaW50ZWdlcl9tZTogICAgICAgICAgICAgJ2ludGVnZXInLFxuICAgICAgICB4OiAgICAgICAgICAgICAgICAgICAgICAnd2hhdD8nLFxuICAgICAgICBtZXNzYWdlX2Zyb21faW50ZWdlcjogICBcIid3aGF0PycgaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCIsXG4gICAgICAgIG1lc3NhZ2U6ICAgICAgICAgICAgICAgIFwiXCJcIm5vdCBhbiBpbnRlZ2VyOiBcIid3aGF0PycgaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXFxcIlwiXCJcIiwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBULmV2ZW5faW50ZWdlci5pc2EgMjZcbiAgICAgIGRlYnVnICfOqWJibnR0X18xOScsIFQuaW50ZWdlci5kYXRhXG4gICAgICBkZWJ1ZyAnzqliYm50dF9fMjAnLCBULmV2ZW5faW50ZWdlci5kYXRhXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2xhc3MgTXlfdHlwZXNwYWNlIGV4dGVuZHMgVHlwZXNwYWNlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgQGFzc2lnbiB7IG1lOiAnaW50ZWdlcicsIH1cbiAgICAgICAgICBAYXNzaWduIHsgeCwgfVxuICAgICAgICAgIHJldHVybiB0cnVlIGlmIE51bWJlci5pc1NhZmVJbnRlZ2VyIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlclwiLCB7IGZyYWN0aW9uOiB4ICUgMSwgfSBpZiBOdW1iZXIuaXNGaW5pdGUgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGV2ZW5faW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICBAYXNzaWduIHsgbWU6ICdldmVuX2ludGVnZXInLCB9XG4gICAgICAgICAgdW5sZXNzIEBULmludGVnZXIuZG1faXNhIEBkYXRhLCB7IG1lOiAnaW50ZWdlcl9tZScsIG1lc3NhZ2U6ICdtZXNzYWdlX2Zyb21faW50ZWdlcicsIH0sIHhcbiAgICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwibm90IGFuIGludGVnZXI6ICN7cnByIEBkYXRhLm1lc3NhZ2VfZnJvbV9pbnRlZ2VyfVwiIClcbiAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcImRldGVjdGVkIHJlbWFpbmRlclwiICkgdW5sZXNzICggeCAlJSAyICkgaXMgMFxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFQgPSBuZXcgTXlfdHlwZXNwYWNlKClcbiAgICAgIFQuZXZlbl9pbnRlZ2VyLmlzYSAnd2hhdD8nXG4gICAgICBAZXEgKCDOqWJibnR0X18yMSA9IC0+IFQuaW50ZWdlci5kYXRhICAgICAgICksIHsgbWU6ICdpbnRlZ2VyJywgeDogJ3doYXQ/JywgbWVzc2FnZTogXCInd2hhdD8nIGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiIH1cbiAgICAgIEBlcSAoIM6pYmJudHRfXzIyID0gLT4gVC5ldmVuX2ludGVnZXIuZGF0YSAgKSwge1xuICAgICAgICBtZTogICAgICAgICAgICAgICAgICAgICAnZXZlbl9pbnRlZ2VyJyxcbiAgICAgICAgaW50ZWdlcl9tZTogICAgICAgICAgICAgJ2ludGVnZXInLFxuICAgICAgICB4OiAgICAgICAgICAgICAgICAgICAgICAnd2hhdD8nLFxuICAgICAgICBtZXNzYWdlX2Zyb21faW50ZWdlcjogICBcIid3aGF0PycgaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCIsXG4gICAgICAgIG1lc3NhZ2U6ICAgICAgICAgICAgICAgIFwiXCJcIm5vdCBhbiBpbnRlZ2VyOiBcIid3aGF0PycgaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXFxcIlwiXCJcIiwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBULmV2ZW5faW50ZWdlci5pc2EgMjZcbiAgICAgIGRlYnVnICfOqWJibnR0X18yMycsIFQuaW50ZWdlci5kYXRhXG4gICAgICBkZWJ1ZyAnzqliYm50dF9fMjQnLCBULmV2ZW5faW50ZWdlci5kYXRhXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG5hbm90eXBlc192Ml9wYXJhbWV0cml6ZWRfdHlwZXM6IC0+XG4gICAgeyBUeXBlLFxuICAgICAgVHlwZXNwYWNlLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX25hbm90eXBlc192MigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2xhc3MgTXlfdHlwZXNwYWNlIGV4dGVuZHMgVHlwZXNwYWNlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgQGFzc2lnbiB7IHgsIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZSBpZiBOdW1iZXIuaXNTYWZlSW50ZWdlciB4XG4gICAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgYSBub24taW50ZWdlciBudW1iZXJcIiwgeyBmcmFjdGlvbjogeCAlIDEsIH0gaWYgTnVtYmVyLmlzRmluaXRlIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBldmVuX2ludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCIje3JwciB4fSBpc24ndCBhbiBpbnRlZ2VyXCIgICkgdW5sZXNzIEBULmludGVnZXIuaXNhIHhcbiAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcIiN7cnByIHh9IGlzbid0IGV2ZW5cIiAgICAgICAgKSB1bmxlc3MgKCB4ICUlIDIgKSBpcyAwXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAbGlzdDogKCB4ICkgLT4gQXJyYXkuaXNBcnJheSB4XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGxpc3Rfb2Y6ICggeCwgZWxlbWVudF90eXBlID0gbnVsbCApIC0+XG4gICAgICAgICAgIyBpbmZvICfOqWJibnR0X18yNScsICdsaXN0X29mJywgeyB4LCBlbGVtZW50X3R5cGUsIH1cbiAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcIm5vdCBhIGxpc3RcIiApIHVubGVzcyBAVC5saXN0LmlzYSB4XG4gICAgICAgICAgcmV0dXJuIHRydWUgdW5sZXNzIGVsZW1lbnRfdHlwZT9cbiAgICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgIGZvciBlbGVtZW50LCBpZHggaW4geFxuICAgICAgICAgICAgdW5sZXNzIGVsZW1lbnRfdHlwZS5pc2EgZWxlbWVudFxuICAgICAgICAgICAgICBtZXNzYWdlICAgPSBcImVsZW1lbnQgYXQgaW5kZXggI3tpZHh9IGlzbid0IGEgI3tlbGVtZW50X3R5cGUuZnVsbF9uYW1lfVwiXG4gICAgICAgICAgICAgIG1lc3NhZ2UgICs9IFwiIOKAkyAje2VsZW1lbnRfdHlwZS5kYXRhLm1lc3NhZ2V9XCIgaWYgZWxlbWVudF90eXBlPy5kYXRhPy5tZXNzYWdlP1xuICAgICAgICAgICAgICByZXR1cm4gKCBAZmFpbCBtZXNzYWdlIClcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBUID0gbmV3IE15X3R5cGVzcGFjZSgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHdoaXNwZXIgJ86pYmJudHRfXzI2JywgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgICAgICAgaGVscCAnzqliYm50dF9fMjcnLCBULmxpc3Rfb2YubmFtZVxuICAgICAgICBoZWxwICfOqWJibnR0X18yOCcsIFQubGlzdF9vZi5mdWxsX25hbWVcbiAgICAgICAgaGVscCAnzqliYm50dF9fMjknLCBULmxpc3Rfb2YuaXNhIFsgNSwgXSwgVC5pbnRlZ2VyXG4gICAgICAgIGluZm8gJ86pYmJudHRfXzMwJywgVC5saXN0X29mLmlucHV0c1xuICAgICAgICBpbmZvICfOqWJibnR0X18zMScsIFQubGlzdF9vZi5pbnB1dHNbIDAgXVxuICAgICAgICBoZWxwICfOqWJibnR0X18zMicsIFQubGlzdF9vZi5mdWxsX25hbWVcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgd2hpc3BlciAnzqliYm50dF9fMzMnLCAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICAgICAgICBoZWxwICfOqWJibnR0X18zNCcsIFQubGlzdC5pc2EgICAgWyAyLCA0LCA2LCBdXG4gICAgICAgIGhlbHAgJ86pYmJudHRfXzM1JywgVC5saXN0X29mLmlzYSBbIDIsIDQsIDYsIF07ICAgICAgICAgICAgICAgICB3YXJuICfOqWJibnR0X18zNicsIFQubGlzdF9vZi5kYXRhXG4gICAgICAgIGhlbHAgJ86pYmJudHRfXzM3JywgVC5saXN0X29mLmlzYSBbIDIsIDQsIDYsIF0sIFQuZXZlbl9pbnRlZ2VyOyB3YXJuICfOqWJibnR0X18zOCcsIFQubGlzdF9vZi5kYXRhXG4gICAgICAgIGhlbHAgJ86pYmJudHRfXzM5JywgVC5saXN0X29mLmlzYSBbIDIsIDQsIDcsIF0sIFQuZXZlbl9pbnRlZ2VyOyB3YXJuICfOqWJibnR0X180MCcsIFQubGlzdF9vZi5kYXRhXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHdoaXNwZXIgJ86pYmJudHRfXzQxJywgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgICAgICAgZGF0YSA9IHt9XG4gICAgICAgIGhlbHAgJ86pYmJudHRfXzQyJywgVC5saXN0X29mLmRtX2lzYSBkYXRhLCB7IG1lc3NhZ2U6ICdtc2cnLCB9LCBbIDIsIDQsIDcsIF0sIFQuZXZlbl9pbnRlZ2VyXG4gICAgICAgIEBlcSAgICAgKCDOqWJibnR0X180MyA9IC0+IFQubGlzdF9vZi5kYXRhICksIHsgbWVzc2FnZTogXCJlbGVtZW50IGF0IGluZGV4IDIgaXNuJ3QgYSBldmVuX2ludGVnZXIg4oCTIDcgaXNuJ3QgZXZlblwiIH1cbiAgICAgICAgQGVxICAgICAoIM6pYmJudHRfXzQ0ID0gLT4gZGF0YSAgICAgICAgICAgKSwgeyAgICAgbXNnOiBcImVsZW1lbnQgYXQgaW5kZXggMiBpc24ndCBhIGV2ZW5faW50ZWdlciDigJMgNyBpc24ndCBldmVuXCIgfVxuICAgICAgICB0cnkgVC5saXN0X29mLnZhbGlkYXRlIFsgMiwgNCwgNywgXSwgIFQuZXZlbl9pbnRlZ2VyIGNhdGNoIGUgdGhlbiB3YXJuICfOqWJibnR0X180NScsIHJldmVyc2UgZS5tZXNzYWdlXG4gICAgICAgIHRyeSBULmxpc3Rfb2YudmFsaWRhdGUgdHJ1ZSwgICAgICAgICAgVC5ldmVuX2ludGVnZXIgY2F0Y2ggZSB0aGVuIHdhcm4gJ86pYmJudHRfXzQ2JywgcmV2ZXJzZSBlLm1lc3NhZ2VcbiAgICAgICAgdHJ5IFQubGlzdF9vZi52YWxpZGF0ZSBbXSwgICAgICAgICAgICBULmV2ZW5faW50ZWdlciBjYXRjaCBlIHRoZW4gd2FybiAnzqliYm50dF9fNDcnLCByZXZlcnNlIGUubWVzc2FnZVxuICAgICAgICB0cnkgVC5saXN0X29mLnZhbGlkYXRlIFsgMS4zLCBdLCAgICAgIFQuZXZlbl9pbnRlZ2VyIGNhdGNoIGUgdGhlbiB3YXJuICfOqWJibnR0X180OCcsIHJldmVyc2UgZS5tZXNzYWdlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRhdGEgPSB7fVxuICAgICAgICBAdGhyb3dzICggzqliYm50dF9fNDkgPSAtPiBULmxpc3Rfb2YuZG1fdmFsaWRhdGUgZGF0YSwgeyBtZXNzYWdlOiAnbXNnJywgfSwgWyAyLCA0LCA3LCBdLCBULmV2ZW5faW50ZWdlciApLCAvbm90IGEgdmFsaWQgbGlzdF9vZi9cbiAgICAgICAgQGVxICAgICAoIM6pYmJudHRfXzUwID0gLT4gZGF0YSApLCB7IG1zZzogXCJlbGVtZW50IGF0IGluZGV4IDIgaXNuJ3QgYSBldmVuX2ludGVnZXIg4oCTIDcgaXNuJ3QgZXZlblwiIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgZGF0YSA9IHt9XG4gICAgICAgIEBlcSAgICAgKCDOqWJibnR0X181MSA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRtX2lzYSAgICAgICBkYXRhLCB7IG1lc3NhZ2U6ICdtc2cnLCB9LCAxMjM0NTYgKSwgdHJ1ZVxuICAgICAgICBAZXEgICAgICggzqliYm50dF9fNTIgPSAtPiBkYXRhICksIHt9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRhdGEgPSB7fVxuICAgICAgICBAZXEgICAgICggzqliYm50dF9fNTMgPSAtPiBULmV2ZW5faW50ZWdlci5kbV92YWxpZGF0ZSAgZGF0YSwgeyBtZXNzYWdlOiAnbXNnJywgfSwgMTIzNDU2ICksIDEyMzQ1NlxuICAgICAgICBAZXEgICAgICggzqliYm50dF9fNTQgPSAtPiBkYXRhICksIHt9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIGRhdGEgPSB7fVxuICAgICAgICBAZXEgICAgICggzqliYm50dF9fNTUgPSAtPiBULmxpc3Rfb2YuZG1fdmFsaWRhdGUgZGF0YSwgeyBtZXNzYWdlOiAnbXNnJywgfSwgWyAyLCA0LCA4LCBdLCBULmV2ZW5faW50ZWdlciApLCBbIDIsIDQsIDgsIF1cbiAgICAgICAgQGVxICAgICAoIM6pYmJudHRfXzU2ID0gLT4gZGF0YSApLCB7fVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuICAgIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgQHRhc2tzXG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0eXBlX2RhdGFfaGFuZGxpbmc6IEB0YXNrcy50eXBlX2RhdGFfaGFuZGxpbmcsIH1cbiJdfQ==
