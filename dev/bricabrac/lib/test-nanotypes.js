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
        var My_typespace, T, Ωhllt__10, Ωhllt__11, Ωhllt__12, Ωhllt__13, Ωhllt___1, Ωhllt___2, Ωhllt___3, Ωhllt___4, Ωhllt___5, Ωhllt___6, Ωhllt___7, Ωhllt___8, Ωhllt___9;
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
        this.eq((Ωhllt___1 = function() {
          return T.integer.isa(9987);
        }), true);
        this.eq((Ωhllt___2 = function() {
          return T.integer.data;
        }), {
          x: 9987
        });
        this.eq((Ωhllt___3 = function() {
          return T.integer.isa(9987.125);
        }), false);
        this.eq((Ωhllt___4 = function() {
          return T.integer.data;
        }), {
          x: 9987.125,
          message: '9987.125 is a non-integer number',
          fraction: 0.125
        });
        this.eq((Ωhllt___5 = function() {
          return T.even_integer.isa(33.125);
        }), false);
        this.eq((Ωhllt___6 = function() {
          return T.integer.data;
        }), {
          x: 33.125,
          message: '33.125 is a non-integer number',
          fraction: 0.125
        });
        this.eq((Ωhllt___7 = function() {
          return T.even_integer.data;
        }), {
          message: 'not an integer'
        });
        this.eq((Ωhllt___8 = function() {
          return T.even_integer.isa(777);
        }), false);
        this.eq((Ωhllt___9 = function() {
          return T.integer.data;
        }), {
          x: 777
        });
        this.eq((Ωhllt__10 = function() {
          return T.even_integer.data;
        }), {
          message: 'detected remainder'
        });
        this.eq((Ωhllt__11 = function() {
          return T.even_integer.isa(888);
        }), true);
        this.eq((Ωhllt__12 = function() {
          return T.integer.data;
        }), {
          x: 888
        });
        this.eq((Ωhllt__13 = function() {
          return T.even_integer.data;
        }), {});
        //.....................................................................................................
        return null;
      })();
      (() => {        //.......................................................................................................
        var My_typespace, T, Ωhllt__15, Ωhllt__16;
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
              //   debug 'Ωhllt__14', @data
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
        this.eq((Ωhllt__15 = function() {
          return T.integer.data;
        }), {
          x: 'what?',
          message: "'what?' is not even a finite number"
        });
        this.eq((Ωhllt__16 = function() {
          return T.even_integer.data;
        }), {
          x: 'what?',
          message: "not an integer"
        });
        //.....................................................................................................
        return null;
      })();
      (() => {        //.......................................................................................................
        var My_typespace, T, Ωhllt__17, Ωhllt__18;
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
            if (!this.T.integer.isa(x, this.data, {
              me: 'integer_me',
              message: 'message_from_integer'
            })) {
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
        this.eq((Ωhllt__17 = function() {
          return T.integer.data;
        }), {
          me: 'integer',
          x: 'what?',
          message: "'what?' is not even a finite number"
        });
        this.eq((Ωhllt__18 = function() {
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
        debug('Ωhllt__19', T.integer.data);
        debug('Ωhllt__20', T.even_integer.data);
        //.....................................................................................................
        return null;
      })();
      (() => {        //.......................................................................................................
        var My_typespace, T, Ωhllt__21, Ωhllt__22;
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
            if (!this.T.integer.isa(x, this.data, {
              me: 'integer_me',
              message: 'message_from_integer'
            })) {
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
        this.eq((Ωhllt__21 = function() {
          return T.integer.data;
        }), {
          me: 'integer',
          x: 'what?',
          message: "'what?' is not even a finite number"
        });
        this.eq((Ωhllt__22 = function() {
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
        debug('Ωhllt__23', T.integer.data);
        debug('Ωhllt__24', T.even_integer.data);
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
              return this.fail("not an integer");
            }
            if ((modulo(x, 2)) !== 0) {
              return this.fail("detected remainder");
            }
            return true;
          }

          //...................................................................................................
          static list(x) {
            return Array.isArray(x);
          }

          //...................................................................................................
          static list_of(x, element_type = null) {
            var element, i, idx, len;
            info('Ωhllt__25', 'list_of', {x, element_type});
            if (!this.T.list.isa(x)) {
              return this.fail("not a list");
            }
            if (element_type == null) {
              return true;
            }
            for (idx = i = 0, len = x.length; i < len; idx = ++i) {
              element = x[idx];
              if (!element_type.isa(element)) {
                return this.fail(`element at index ${idx} isn't a ${element_type.name}`);
              }
            }
            return true;
          }

        };
        //.....................................................................................................
        T = new My_typespace();
        (() => {
          whisper('Ωhllt__26', '—————————————————————————————————————————————————————————————————————————————');
          help('Ωhllt__27', T.list.isa([2, 4, 6]));
          help('Ωhllt__28', T.list_of.isa([2, 4, 6]));
          warn('Ωhllt__29', T.list_of.data);
          help('Ωhllt__30', T.list_of.isa([2, 4, 6], T.even_integer));
          warn('Ωhllt__31', T.list_of.data);
          help('Ωhllt__32', T.list_of.isa([2, 4, 7], T.even_integer));
          warn('Ωhllt__33', T.list_of.data);
          return null;
        })();
        (() => {          //.....................................................................................................
          var data;
          whisper('Ωhllt__34', '—————————————————————————————————————————————————————————————————————————————');
          data = {};
          help('Ωhllt__35', T.list_of.isa_datmap([[2, 4, 7], T.even_integer], data, {
            message: 'msg'
          }));
          warn('Ωhllt__36', T.list_of.data);
          warn('Ωhllt__37', data);
          return null;
        })();
        (() => {          //.....................................................................................................
          whisper('Ωhllt__38', '—————————————————————————————————————————————————————————————————————————————');
          help('Ωhllt__39', T.list_of.isa_datmap([[2, 4, 7], T.even_integer], null, {
            message: 'msg'
          }));
          warn('Ωhllt__40', T.list_of.data);
          return null;
        })();
        (() => {          //.....................................................................................................
          whisper('Ωhllt__41', '—————————————————————————————————————————————————————————————————————————————');
          help('Ωhllt__42', T.list_of.datmap_isa(null, {
            message: 'msg'
          }, [2, 4, 7], T.even_integer));
          warn('Ωhllt__43', T.list_of.data);
          return null;
        })();
        (() => {          //.....................................................................................................
          var dm;
          whisper('Ωhllt__41', '—————————————————————————————————————————————————————————————————————————————');
          dm = function(data, mapping, fn) {};
          help('Ωhllt__42', dm(null, {
            message: 'msg'
          }, function() {
            return T.list_of.isa([2, 4, 7], T.even_integer);
          }));
          warn('Ωhllt__43', T.list_of.data);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtbmFub3R5cGVzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBO0lBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixXQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsT0FIRixFQUlFLEdBSkYsQ0FBQSxHQUk0QixHQUFHLENBQUMsR0FKaEMsRUFaQTs7O0VBa0JBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLDZDQUFSLEVBckI1Qjs7O0VBeUJBLElBQUMsQ0FBQSxLQUFELEdBR0UsQ0FBQTs7SUFBQSxrQkFBQSxFQUFvQixRQUFBLENBQUEsQ0FBQTtBQUN0QixVQUFBLElBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxJQUFGLEVBQ0UsU0FERixDQUFBLEdBQzhCLFNBQVMsQ0FB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RUE5SGpDLEVBNUJGOzs7RUErTkEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBO01BQUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO2FBQ2QsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixJQUFDLENBQUEsS0FBL0I7SUFIc0MsQ0FBQSxJQUF4Qzs7O0VBL05BO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2hvbGxlcml0aCdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0YXNrcyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB0eXBlX2RhdGFfaGFuZGxpbmc6IC0+XG4gICAgeyBUeXBlLFxuICAgICAgVHlwZXNwYWNlLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX25hbm90eXBlcygpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2xhc3MgTXlfdHlwZXNwYWNlIGV4dGVuZHMgVHlwZXNwYWNlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgQGFzc2lnbiB7IHgsIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZSBpZiBOdW1iZXIuaXNTYWZlSW50ZWdlciB4XG4gICAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgYSBub24taW50ZWdlciBudW1iZXJcIiwgeyBmcmFjdGlvbjogeCAlIDEsIH0gaWYgTnVtYmVyLmlzRmluaXRlIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBldmVuX2ludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJub3QgYW4gaW50ZWdlclwiICAgICApIHVubGVzcyBAVC5pbnRlZ2VyLmlzYSB4XG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJkZXRlY3RlZCByZW1haW5kZXJcIiApIHVubGVzcyAoIHggJSUgMiApIGlzIDBcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBUID0gbmV3IE15X3R5cGVzcGFjZSgpXG4gICAgICBAZXEgKCDOqWhsbHRfX18xID0gLT4gVC5pbnRlZ2VyLmlzYSA5OTg3ICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfX18yID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgICAgICAgICApLCB7IHg6IDk5ODcsIH1cbiAgICAgIEBlcSAoIM6paGxsdF9fXzMgPSAtPiBULmludGVnZXIuaXNhIDk5ODcuMTI1ICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWhsbHRfX180ID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgICAgICAgICApLCB7IHg6IDk5ODcuMTI1LCBtZXNzYWdlOiAnOTk4Ny4xMjUgaXMgYSBub24taW50ZWdlciBudW1iZXInLCBmcmFjdGlvbjogMC4xMjUsIH1cbiAgICAgIEBlcSAoIM6paGxsdF9fXzUgPSAtPiBULmV2ZW5faW50ZWdlci5pc2EgMzMuMTI1ICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWhsbHRfX182ID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgICAgICAgICApLCB7IHg6IDMzLjEyNSwgbWVzc2FnZTogJzMzLjEyNSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlcicsIGZyYWN0aW9uOiAwLjEyNSwgfVxuICAgICAgQGVxICggzqlobGx0X19fNyA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICAgICAgICAgKSwgeyBtZXNzYWdlOiAnbm90IGFuIGludGVnZXInIH1cbiAgICAgIEBlcSAoIM6paGxsdF9fXzggPSAtPiBULmV2ZW5faW50ZWdlci5pc2EgNzc3ICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWhsbHRfX185ID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgICAgICAgICApLCB7IHg6IDc3NywgfVxuICAgICAgQGVxICggzqlobGx0X18xMCA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICAgICAgICAgKSwgeyBtZXNzYWdlOiAnZGV0ZWN0ZWQgcmVtYWluZGVyJyB9XG4gICAgICBAZXEgKCDOqWhsbHRfXzExID0gLT4gVC5ldmVuX2ludGVnZXIuaXNhIDg4OCAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfXzEyID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgICAgICAgICApLCB7IHg6IDg4OCwgfVxuICAgICAgQGVxICggzqlobGx0X18xMyA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICAgICAgICAgKSwge31cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjbGFzcyBNeV90eXBlc3BhY2UgZXh0ZW5kcyBUeXBlc3BhY2VcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAaW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICBAYXNzaWduIHsgeCwgfVxuICAgICAgICAgIHJldHVybiB0cnVlIGlmIE51bWJlci5pc1NhZmVJbnRlZ2VyIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlclwiLCB7IGZyYWN0aW9uOiB4ICUgMSwgfSBpZiBOdW1iZXIuaXNGaW5pdGUgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGV2ZW5faW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICAjIHVubGVzcyBAVC5pbnRlZ2VyLmlzYSB4LCBAZGF0YVxuICAgICAgICAgICMgICBkZWJ1ZyAnzqlobGx0X18xNCcsIEBkYXRhXG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJub3QgYW4gaW50ZWdlclwiICAgICApIHVubGVzcyBAVC5pbnRlZ2VyLmlzYSB4LCBAZGF0YVxuICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwiZGV0ZWN0ZWQgcmVtYWluZGVyXCIgKSB1bmxlc3MgKCB4ICUlIDIgKSBpcyAwXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgVCA9IG5ldyBNeV90eXBlc3BhY2UoKVxuICAgICAgVC5ldmVuX2ludGVnZXIuaXNhICd3aGF0PydcbiAgICAgIEBlcSAoIM6paGxsdF9fMTUgPSAtPiBULmludGVnZXIuZGF0YSAgICAgICApLCB7IHg6ICd3aGF0PycsIG1lc3NhZ2U6IFwiJ3doYXQ/JyBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIiwgfVxuICAgICAgQGVxICggzqlobGx0X18xNiA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICksIHsgeDogJ3doYXQ/JywgbWVzc2FnZTogXCJub3QgYW4gaW50ZWdlclwiLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2xhc3MgTXlfdHlwZXNwYWNlIGV4dGVuZHMgVHlwZXNwYWNlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgQGFzc2lnbiB7IG1lOiAnaW50ZWdlcicsIH1cbiAgICAgICAgICBAYXNzaWduIHsgeCwgfVxuICAgICAgICAgIHJldHVybiB0cnVlIGlmIE51bWJlci5pc1NhZmVJbnRlZ2VyIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlclwiLCB7IGZyYWN0aW9uOiB4ICUgMSwgfSBpZiBOdW1iZXIuaXNGaW5pdGUgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGV2ZW5faW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICBAYXNzaWduIHsgbWU6ICdldmVuX2ludGVnZXInLCB9XG4gICAgICAgICAgdW5sZXNzIEBULmludGVnZXIuaXNhIHgsIEBkYXRhLCB7IG1lOiAnaW50ZWdlcl9tZScsIG1lc3NhZ2U6ICdtZXNzYWdlX2Zyb21faW50ZWdlcicsIH1cbiAgICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwibm90IGFuIGludGVnZXI6ICN7cnByIEBkYXRhLm1lc3NhZ2VfZnJvbV9pbnRlZ2VyfVwiIClcbiAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcImRldGVjdGVkIHJlbWFpbmRlclwiICkgdW5sZXNzICggeCAlJSAyICkgaXMgMFxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFQgPSBuZXcgTXlfdHlwZXNwYWNlKClcbiAgICAgIFQuZXZlbl9pbnRlZ2VyLmlzYSAnd2hhdD8nXG4gICAgICBAZXEgKCDOqWhsbHRfXzE3ID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgKSwgeyBtZTogJ2ludGVnZXInLCB4OiAnd2hhdD8nLCBtZXNzYWdlOiBcIid3aGF0PycgaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCIgfVxuICAgICAgQGVxICggzqlobGx0X18xOCA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICksIHtcbiAgICAgICAgbWU6ICAgICAgICAgICAgICAgICAgICAgJ2V2ZW5faW50ZWdlcicsXG4gICAgICAgIGludGVnZXJfbWU6ICAgICAgICAgICAgICdpbnRlZ2VyJyxcbiAgICAgICAgeDogICAgICAgICAgICAgICAgICAgICAgJ3doYXQ/JyxcbiAgICAgICAgbWVzc2FnZV9mcm9tX2ludGVnZXI6ICAgXCInd2hhdD8nIGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiLFxuICAgICAgICBtZXNzYWdlOiAgICAgICAgICAgICAgICBcIlwiXCJub3QgYW4gaW50ZWdlcjogXCInd2hhdD8nIGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclxcXCJcIlwiXCIsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgVC5ldmVuX2ludGVnZXIuaXNhIDI2XG4gICAgICBkZWJ1ZyAnzqlobGx0X18xOScsIFQuaW50ZWdlci5kYXRhXG4gICAgICBkZWJ1ZyAnzqlobGx0X18yMCcsIFQuZXZlbl9pbnRlZ2VyLmRhdGFcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjbGFzcyBNeV90eXBlc3BhY2UgZXh0ZW5kcyBUeXBlc3BhY2VcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAaW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICBAYXNzaWduIHsgbWU6ICdpbnRlZ2VyJywgfVxuICAgICAgICAgIEBhc3NpZ24geyB4LCB9XG4gICAgICAgICAgcmV0dXJuIHRydWUgaWYgTnVtYmVyLmlzU2FmZUludGVnZXIgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIGEgbm9uLWludGVnZXIgbnVtYmVyXCIsIHsgZnJhY3Rpb246IHggJSAxLCB9IGlmIE51bWJlci5pc0Zpbml0ZSB4XG4gICAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXZlbl9pbnRlZ2VyOiAoIHggKSAtPlxuICAgICAgICAgIEBhc3NpZ24geyBtZTogJ2V2ZW5faW50ZWdlcicsIH1cbiAgICAgICAgICB1bmxlc3MgQFQuaW50ZWdlci5pc2EgeCwgQGRhdGEsIHsgbWU6ICdpbnRlZ2VyX21lJywgbWVzc2FnZTogJ21lc3NhZ2VfZnJvbV9pbnRlZ2VyJywgfVxuICAgICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJub3QgYW4gaW50ZWdlcjogI3tycHIgQGRhdGEubWVzc2FnZV9mcm9tX2ludGVnZXJ9XCIgKVxuICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwiZGV0ZWN0ZWQgcmVtYWluZGVyXCIgKSB1bmxlc3MgKCB4ICUlIDIgKSBpcyAwXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgVCA9IG5ldyBNeV90eXBlc3BhY2UoKVxuICAgICAgVC5ldmVuX2ludGVnZXIuaXNhICd3aGF0PydcbiAgICAgIEBlcSAoIM6paGxsdF9fMjEgPSAtPiBULmludGVnZXIuZGF0YSAgICAgICApLCB7IG1lOiAnaW50ZWdlcicsIHg6ICd3aGF0PycsIG1lc3NhZ2U6IFwiJ3doYXQ/JyBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIiB9XG4gICAgICBAZXEgKCDOqWhsbHRfXzIyID0gLT4gVC5ldmVuX2ludGVnZXIuZGF0YSAgKSwge1xuICAgICAgICBtZTogICAgICAgICAgICAgICAgICAgICAnZXZlbl9pbnRlZ2VyJyxcbiAgICAgICAgaW50ZWdlcl9tZTogICAgICAgICAgICAgJ2ludGVnZXInLFxuICAgICAgICB4OiAgICAgICAgICAgICAgICAgICAgICAnd2hhdD8nLFxuICAgICAgICBtZXNzYWdlX2Zyb21faW50ZWdlcjogICBcIid3aGF0PycgaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCIsXG4gICAgICAgIG1lc3NhZ2U6ICAgICAgICAgICAgICAgIFwiXCJcIm5vdCBhbiBpbnRlZ2VyOiBcIid3aGF0PycgaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXFxcIlwiXCJcIiwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBULmV2ZW5faW50ZWdlci5pc2EgMjZcbiAgICAgIGRlYnVnICfOqWhsbHRfXzIzJywgVC5pbnRlZ2VyLmRhdGFcbiAgICAgIGRlYnVnICfOqWhsbHRfXzI0JywgVC5ldmVuX2ludGVnZXIuZGF0YVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuICAgIHJldHVybiBudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBuYW5vdHlwZXNfdjJfcGFyYW1ldHJpemVkX3R5cGVzOiAtPlxuICAgIHsgVHlwZSxcbiAgICAgIFR5cGVzcGFjZSwgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9uYW5vdHlwZXNfdjIoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNsYXNzIE15X3R5cGVzcGFjZSBleHRlbmRzIFR5cGVzcGFjZVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBpbnRlZ2VyOiAoIHggKSAtPlxuICAgICAgICAgIEBhc3NpZ24geyB4LCB9XG4gICAgICAgICAgcmV0dXJuIHRydWUgaWYgTnVtYmVyLmlzU2FmZUludGVnZXIgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIGEgbm9uLWludGVnZXIgbnVtYmVyXCIsIHsgZnJhY3Rpb246IHggJSAxLCB9IGlmIE51bWJlci5pc0Zpbml0ZSB4XG4gICAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXZlbl9pbnRlZ2VyOiAoIHggKSAtPlxuICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwibm90IGFuIGludGVnZXJcIiAgICAgKSB1bmxlc3MgQFQuaW50ZWdlci5pc2EgeFxuICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwiZGV0ZWN0ZWQgcmVtYWluZGVyXCIgKSB1bmxlc3MgKCB4ICUlIDIgKSBpcyAwXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAbGlzdDogKCB4ICkgLT4gQXJyYXkuaXNBcnJheSB4XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGxpc3Rfb2Y6ICggeCwgZWxlbWVudF90eXBlID0gbnVsbCApIC0+XG4gICAgICAgICAgaW5mbyAnzqlobGx0X18yNScsICdsaXN0X29mJywgeyB4LCBlbGVtZW50X3R5cGUsIH1cbiAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcIm5vdCBhIGxpc3RcIiApIHVubGVzcyBAVC5saXN0LmlzYSB4XG4gICAgICAgICAgcmV0dXJuIHRydWUgdW5sZXNzIGVsZW1lbnRfdHlwZT9cbiAgICAgICAgICBmb3IgZWxlbWVudCwgaWR4IGluIHhcbiAgICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwiZWxlbWVudCBhdCBpbmRleCAje2lkeH0gaXNuJ3QgYSAje2VsZW1lbnRfdHlwZS5uYW1lfVwiICkgdW5sZXNzIGVsZW1lbnRfdHlwZS5pc2EgZWxlbWVudFxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFQgPSBuZXcgTXlfdHlwZXNwYWNlKClcbiAgICAgIGRvID0+XG4gICAgICAgIHdoaXNwZXIgJ86paGxsdF9fMjYnLCAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICAgICAgICBoZWxwICfOqWhsbHRfXzI3JywgVC5saXN0LmlzYSAgICBbIDIsIDQsIDYsIF1cbiAgICAgICAgaGVscCAnzqlobGx0X18yOCcsIFQubGlzdF9vZi5pc2EgWyAyLCA0LCA2LCBdOyAgICAgICAgICAgICAgICAgd2FybiAnzqlobGx0X18yOScsIFQubGlzdF9vZi5kYXRhXG4gICAgICAgIGhlbHAgJ86paGxsdF9fMzAnLCBULmxpc3Rfb2YuaXNhIFsgMiwgNCwgNiwgXSwgVC5ldmVuX2ludGVnZXI7IHdhcm4gJ86paGxsdF9fMzEnLCBULmxpc3Rfb2YuZGF0YVxuICAgICAgICBoZWxwICfOqWhsbHRfXzMyJywgVC5saXN0X29mLmlzYSBbIDIsIDQsIDcsIF0sIFQuZXZlbl9pbnRlZ2VyOyB3YXJuICfOqWhsbHRfXzMzJywgVC5saXN0X29mLmRhdGFcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgd2hpc3BlciAnzqlobGx0X18zNCcsICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICAgICAgIGRhdGEgPSB7fVxuICAgICAgICBoZWxwICfOqWhsbHRfXzM1JywgVC5saXN0X29mLmlzYV9kYXRtYXAgWyBbIDIsIDQsIDcsIF0sIFQuZXZlbl9pbnRlZ2VyLCBdLCBkYXRhLCB7IG1lc3NhZ2U6ICdtc2cnLCB9XG4gICAgICAgIHdhcm4gJ86paGxsdF9fMzYnLCBULmxpc3Rfb2YuZGF0YVxuICAgICAgICB3YXJuICfOqWhsbHRfXzM3JywgZGF0YVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICB3aGlzcGVyICfOqWhsbHRfXzM4JywgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgICAgICAgaGVscCAnzqlobGx0X18zOScsIFQubGlzdF9vZi5pc2FfZGF0bWFwIFsgWyAyLCA0LCA3LCBdLCBULmV2ZW5faW50ZWdlciwgXSwgbnVsbCwgeyBtZXNzYWdlOiAnbXNnJywgfVxuICAgICAgICB3YXJuICfOqWhsbHRfXzQwJywgVC5saXN0X29mLmRhdGFcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgd2hpc3BlciAnzqlobGx0X180MScsICfigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQnXG4gICAgICAgIGhlbHAgJ86paGxsdF9fNDInLCBULmxpc3Rfb2YuZGF0bWFwX2lzYSBudWxsLCB7IG1lc3NhZ2U6ICdtc2cnLCB9LCBbIDIsIDQsIDcsIF0sIFQuZXZlbl9pbnRlZ2VyXG4gICAgICAgIHdhcm4gJ86paGxsdF9fNDMnLCBULmxpc3Rfb2YuZGF0YVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBkbyA9PlxuICAgICAgICB3aGlzcGVyICfOqWhsbHRfXzQxJywgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgICAgICAgZG0gPSAoIGRhdGEsIG1hcHBpbmcsIGZuICkgLT5cbiAgICAgICAgaGVscCAnzqlobGx0X180MicsIGRtIG51bGwsIHsgbWVzc2FnZTogJ21zZycsIH0sIC0+IFQubGlzdF9vZi5pc2EgWyAyLCA0LCA3LCBdLCBULmV2ZW5faW50ZWdlclxuICAgICAgICB3YXJuICfOqWhsbHRfXzQzJywgVC5saXN0X29mLmRhdGFcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEB0YXNrc1xuICAjICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IHsgdHlwZV9kYXRhX2hhbmRsaW5nOiBAdGFza3MudHlwZV9kYXRhX2hhbmRsaW5nLCB9XG4iXX0=
