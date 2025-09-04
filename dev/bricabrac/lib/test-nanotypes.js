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
        var My_typespace, T, Ωhllt_136, Ωhllt_137, Ωhllt_138, Ωhllt_139, Ωhllt_140, Ωhllt_141, Ωhllt_142, Ωhllt_143, Ωhllt_144, Ωhllt_145, Ωhllt_146, Ωhllt_147, Ωhllt_148;
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
        this.eq((Ωhllt_136 = function() {
          return T.integer.isa(9987);
        }), true);
        this.eq((Ωhllt_137 = function() {
          return T.integer.data;
        }), {
          x: 9987
        });
        this.eq((Ωhllt_138 = function() {
          return T.integer.isa(9987.125);
        }), false);
        this.eq((Ωhllt_139 = function() {
          return T.integer.data;
        }), {
          x: 9987.125,
          message: '9987.125 is a non-integer number',
          fraction: 0.125
        });
        this.eq((Ωhllt_140 = function() {
          return T.even_integer.isa(33.125);
        }), false);
        this.eq((Ωhllt_141 = function() {
          return T.integer.data;
        }), {
          x: 33.125,
          message: '33.125 is a non-integer number',
          fraction: 0.125
        });
        this.eq((Ωhllt_142 = function() {
          return T.even_integer.data;
        }), {
          message: 'not an integer'
        });
        this.eq((Ωhllt_143 = function() {
          return T.even_integer.isa(777);
        }), false);
        this.eq((Ωhllt_144 = function() {
          return T.integer.data;
        }), {
          x: 777
        });
        this.eq((Ωhllt_145 = function() {
          return T.even_integer.data;
        }), {
          message: 'detected remainder'
        });
        this.eq((Ωhllt_146 = function() {
          return T.even_integer.isa(888);
        }), true);
        this.eq((Ωhllt_147 = function() {
          return T.integer.data;
        }), {
          x: 888
        });
        this.eq((Ωhllt_148 = function() {
          return T.even_integer.data;
        }), {});
        //.....................................................................................................
        return null;
      })();
      (() => {        //.......................................................................................................
        var My_typespace, T, Ωhllt_150, Ωhllt_151;
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
              //   debug 'Ωhllt_149', @data
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
        this.eq((Ωhllt_150 = function() {
          return T.integer.data;
        }), {
          x: 'what?',
          message: "'what?' is not even a finite number"
        });
        this.eq((Ωhllt_151 = function() {
          return T.even_integer.data;
        }), {
          x: 'what?',
          message: "not an integer"
        });
        //.....................................................................................................
        return null;
      })();
      (() => {        //.......................................................................................................
        var My_typespace, T, Ωhllt_152, Ωhllt_153;
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
        this.eq((Ωhllt_152 = function() {
          return T.integer.data;
        }), {
          me: 'integer',
          x: 'what?',
          message: "'what?' is not even a finite number"
        });
        this.eq((Ωhllt_153 = function() {
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
        debug('Ωhllt_154', T.integer.data);
        debug('Ωhllt_155', T.even_integer.data);
        //.....................................................................................................
        return null;
      })();
      (() => {        //.......................................................................................................
        var My_typespace, T, Ωhllt_156, Ωhllt_157;
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
        this.eq((Ωhllt_156 = function() {
          return T.integer.data;
        }), {
          me: 'integer',
          x: 'what?',
          message: "'what?' is not even a finite number"
        });
        this.eq((Ωhllt_157 = function() {
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
        debug('Ωhllt_158', T.integer.data);
        debug('Ωhllt_159', T.even_integer.data);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtbmFub3R5cGVzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBO0lBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixXQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsT0FIRixFQUlFLEdBSkYsQ0FBQSxHQUk0QixHQUFHLENBQUMsR0FKaEMsRUFaQTs7O0VBa0JBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLDZDQUFSLEVBckI1Qjs7O0VBeUJBLElBQUMsQ0FBQSxLQUFELEdBR0UsQ0FBQTs7SUFBQSxrQkFBQSxFQUFvQixRQUFBLENBQUEsQ0FBQTtBQUN0QixVQUFBLElBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxJQUFGLEVBQ0UsU0FERixDQUFBLEdBQzhCLFNBQVMsQ0FB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QUFPO0lBM0hXO0VBQXBCLEVBNUJGOzs7RUEySkEsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBO01BQUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO2FBQ2QsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixJQUFDLENBQUEsS0FBL0I7SUFIc0MsQ0FBQSxJQUF4Qzs7O0VBM0pBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbid1c2Ugc3RyaWN0J1xuXG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2hvbGxlcml0aCdcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2luZ2xlLWZpbGUtbW9kdWxlcydcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0YXNrcyA9XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB0eXBlX2RhdGFfaGFuZGxpbmc6IC0+XG4gICAgeyBUeXBlLFxuICAgICAgVHlwZXNwYWNlLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX25hbm90eXBlcygpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2xhc3MgTXlfdHlwZXNwYWNlIGV4dGVuZHMgVHlwZXNwYWNlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgQGFzc2lnbiB7IHgsIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZSBpZiBOdW1iZXIuaXNTYWZlSW50ZWdlciB4XG4gICAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgYSBub24taW50ZWdlciBudW1iZXJcIiwgeyBmcmFjdGlvbjogeCAlIDEsIH0gaWYgTnVtYmVyLmlzRmluaXRlIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBldmVuX2ludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJub3QgYW4gaW50ZWdlclwiICAgICApIHVubGVzcyBAVC5pbnRlZ2VyLmlzYSB4XG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJkZXRlY3RlZCByZW1haW5kZXJcIiApIHVubGVzcyAoIHggJSUgMiApIGlzIDBcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBUID0gbmV3IE15X3R5cGVzcGFjZSgpXG4gICAgICBAZXEgKCDOqWhsbHRfMTM2ID0gLT4gVC5pbnRlZ2VyLmlzYSA5OTg3ICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMTM3ID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgICAgICAgICApLCB7IHg6IDk5ODcsIH1cbiAgICAgIEBlcSAoIM6paGxsdF8xMzggPSAtPiBULmludGVnZXIuaXNhIDk5ODcuMTI1ICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWhsbHRfMTM5ID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgICAgICAgICApLCB7IHg6IDk5ODcuMTI1LCBtZXNzYWdlOiAnOTk4Ny4xMjUgaXMgYSBub24taW50ZWdlciBudW1iZXInLCBmcmFjdGlvbjogMC4xMjUsIH1cbiAgICAgIEBlcSAoIM6paGxsdF8xNDAgPSAtPiBULmV2ZW5faW50ZWdlci5pc2EgMzMuMTI1ICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWhsbHRfMTQxID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgICAgICAgICApLCB7IHg6IDMzLjEyNSwgbWVzc2FnZTogJzMzLjEyNSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlcicsIGZyYWN0aW9uOiAwLjEyNSwgfVxuICAgICAgQGVxICggzqlobGx0XzE0MiA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICAgICAgICAgKSwgeyBtZXNzYWdlOiAnbm90IGFuIGludGVnZXInIH1cbiAgICAgIEBlcSAoIM6paGxsdF8xNDMgPSAtPiBULmV2ZW5faW50ZWdlci5pc2EgNzc3ICAgICAgICksIGZhbHNlXG4gICAgICBAZXEgKCDOqWhsbHRfMTQ0ID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgICAgICAgICApLCB7IHg6IDc3NywgfVxuICAgICAgQGVxICggzqlobGx0XzE0NSA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICAgICAgICAgKSwgeyBtZXNzYWdlOiAnZGV0ZWN0ZWQgcmVtYWluZGVyJyB9XG4gICAgICBAZXEgKCDOqWhsbHRfMTQ2ID0gLT4gVC5ldmVuX2ludGVnZXIuaXNhIDg4OCAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfMTQ3ID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgICAgICAgICApLCB7IHg6IDg4OCwgfVxuICAgICAgQGVxICggzqlobGx0XzE0OCA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICAgICAgICAgKSwge31cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjbGFzcyBNeV90eXBlc3BhY2UgZXh0ZW5kcyBUeXBlc3BhY2VcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAaW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICBAYXNzaWduIHsgeCwgfVxuICAgICAgICAgIHJldHVybiB0cnVlIGlmIE51bWJlci5pc1NhZmVJbnRlZ2VyIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlclwiLCB7IGZyYWN0aW9uOiB4ICUgMSwgfSBpZiBOdW1iZXIuaXNGaW5pdGUgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGV2ZW5faW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICAjIHVubGVzcyBAVC5pbnRlZ2VyLmlzYSB4LCBAZGF0YVxuICAgICAgICAgICMgICBkZWJ1ZyAnzqlobGx0XzE0OScsIEBkYXRhXG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJub3QgYW4gaW50ZWdlclwiICAgICApIHVubGVzcyBAVC5pbnRlZ2VyLmlzYSB4LCBAZGF0YVxuICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwiZGV0ZWN0ZWQgcmVtYWluZGVyXCIgKSB1bmxlc3MgKCB4ICUlIDIgKSBpcyAwXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgVCA9IG5ldyBNeV90eXBlc3BhY2UoKVxuICAgICAgVC5ldmVuX2ludGVnZXIuaXNhICd3aGF0PydcbiAgICAgIEBlcSAoIM6paGxsdF8xNTAgPSAtPiBULmludGVnZXIuZGF0YSAgICAgICApLCB7IHg6ICd3aGF0PycsIG1lc3NhZ2U6IFwiJ3doYXQ/JyBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIiwgfVxuICAgICAgQGVxICggzqlobGx0XzE1MSA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICksIHsgeDogJ3doYXQ/JywgbWVzc2FnZTogXCJub3QgYW4gaW50ZWdlclwiLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2xhc3MgTXlfdHlwZXNwYWNlIGV4dGVuZHMgVHlwZXNwYWNlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgQGFzc2lnbiB7IG1lOiAnaW50ZWdlcicsIH1cbiAgICAgICAgICBAYXNzaWduIHsgeCwgfVxuICAgICAgICAgIHJldHVybiB0cnVlIGlmIE51bWJlci5pc1NhZmVJbnRlZ2VyIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlclwiLCB7IGZyYWN0aW9uOiB4ICUgMSwgfSBpZiBOdW1iZXIuaXNGaW5pdGUgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGV2ZW5faW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICBAYXNzaWduIHsgbWU6ICdldmVuX2ludGVnZXInLCB9XG4gICAgICAgICAgdW5sZXNzIEBULmludGVnZXIuaXNhIHgsIEBkYXRhLCB7IG1lOiAnaW50ZWdlcl9tZScsIG1lc3NhZ2U6ICdtZXNzYWdlX2Zyb21faW50ZWdlcicsIH1cbiAgICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwibm90IGFuIGludGVnZXI6ICN7cnByIEBkYXRhLm1lc3NhZ2VfZnJvbV9pbnRlZ2VyfVwiIClcbiAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcImRldGVjdGVkIHJlbWFpbmRlclwiICkgdW5sZXNzICggeCAlJSAyICkgaXMgMFxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFQgPSBuZXcgTXlfdHlwZXNwYWNlKClcbiAgICAgIFQuZXZlbl9pbnRlZ2VyLmlzYSAnd2hhdD8nXG4gICAgICBAZXEgKCDOqWhsbHRfMTUyID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgKSwgeyBtZTogJ2ludGVnZXInLCB4OiAnd2hhdD8nLCBtZXNzYWdlOiBcIid3aGF0PycgaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCIgfVxuICAgICAgQGVxICggzqlobGx0XzE1MyA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICksIHtcbiAgICAgICAgbWU6ICAgICAgICAgICAgICAgICAgICAgJ2V2ZW5faW50ZWdlcicsXG4gICAgICAgIGludGVnZXJfbWU6ICAgICAgICAgICAgICdpbnRlZ2VyJyxcbiAgICAgICAgeDogICAgICAgICAgICAgICAgICAgICAgJ3doYXQ/JyxcbiAgICAgICAgbWVzc2FnZV9mcm9tX2ludGVnZXI6ICAgXCInd2hhdD8nIGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiLFxuICAgICAgICBtZXNzYWdlOiAgICAgICAgICAgICAgICBcIlwiXCJub3QgYW4gaW50ZWdlcjogXCInd2hhdD8nIGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclxcXCJcIlwiXCIsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgVC5ldmVuX2ludGVnZXIuaXNhIDI2XG4gICAgICBkZWJ1ZyAnzqlobGx0XzE1NCcsIFQuaW50ZWdlci5kYXRhXG4gICAgICBkZWJ1ZyAnzqlobGx0XzE1NScsIFQuZXZlbl9pbnRlZ2VyLmRhdGFcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjbGFzcyBNeV90eXBlc3BhY2UgZXh0ZW5kcyBUeXBlc3BhY2VcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAaW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICBAYXNzaWduIHsgbWU6ICdpbnRlZ2VyJywgfVxuICAgICAgICAgIEBhc3NpZ24geyB4LCB9XG4gICAgICAgICAgcmV0dXJuIHRydWUgaWYgTnVtYmVyLmlzU2FmZUludGVnZXIgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIGEgbm9uLWludGVnZXIgbnVtYmVyXCIsIHsgZnJhY3Rpb246IHggJSAxLCB9IGlmIE51bWJlci5pc0Zpbml0ZSB4XG4gICAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXZlbl9pbnRlZ2VyOiAoIHggKSAtPlxuICAgICAgICAgIEBhc3NpZ24geyBtZTogJ2V2ZW5faW50ZWdlcicsIH1cbiAgICAgICAgICB1bmxlc3MgQFQuaW50ZWdlci5pc2EgeCwgQGRhdGEsIHsgbWU6ICdpbnRlZ2VyX21lJywgbWVzc2FnZTogJ21lc3NhZ2VfZnJvbV9pbnRlZ2VyJywgfVxuICAgICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJub3QgYW4gaW50ZWdlcjogI3tycHIgQGRhdGEubWVzc2FnZV9mcm9tX2ludGVnZXJ9XCIgKVxuICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwiZGV0ZWN0ZWQgcmVtYWluZGVyXCIgKSB1bmxlc3MgKCB4ICUlIDIgKSBpcyAwXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgVCA9IG5ldyBNeV90eXBlc3BhY2UoKVxuICAgICAgVC5ldmVuX2ludGVnZXIuaXNhICd3aGF0PydcbiAgICAgIEBlcSAoIM6paGxsdF8xNTYgPSAtPiBULmludGVnZXIuZGF0YSAgICAgICApLCB7IG1lOiAnaW50ZWdlcicsIHg6ICd3aGF0PycsIG1lc3NhZ2U6IFwiJ3doYXQ/JyBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIiB9XG4gICAgICBAZXEgKCDOqWhsbHRfMTU3ID0gLT4gVC5ldmVuX2ludGVnZXIuZGF0YSAgKSwge1xuICAgICAgICBtZTogICAgICAgICAgICAgICAgICAgICAnZXZlbl9pbnRlZ2VyJyxcbiAgICAgICAgaW50ZWdlcl9tZTogICAgICAgICAgICAgJ2ludGVnZXInLFxuICAgICAgICB4OiAgICAgICAgICAgICAgICAgICAgICAnd2hhdD8nLFxuICAgICAgICBtZXNzYWdlX2Zyb21faW50ZWdlcjogICBcIid3aGF0PycgaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCIsXG4gICAgICAgIG1lc3NhZ2U6ICAgICAgICAgICAgICAgIFwiXCJcIm5vdCBhbiBpbnRlZ2VyOiBcIid3aGF0PycgaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXFxcIlwiXCJcIiwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBULmV2ZW5faW50ZWdlci5pc2EgMjZcbiAgICAgIGRlYnVnICfOqWhsbHRfMTU4JywgVC5pbnRlZ2VyLmRhdGFcbiAgICAgIGRlYnVnICfOqWhsbHRfMTU5JywgVC5ldmVuX2ludGVnZXIuZGF0YVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuICAgIHJldHVybiBudWxsXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgQHRhc2tzXG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyB0eXBlX2RhdGFfaGFuZGxpbmc6IEB0YXNrcy50eXBlX2RhdGFfaGFuZGxpbmcsIH1cbiJdfQ==
