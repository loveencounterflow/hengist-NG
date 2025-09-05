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
    composed_types: function() {
      var Type, Typespace;
      ({Type, Typespace} = SFMODULES.unstable.require_nanotypes());
      (() => {        //.......................................................................................................
        var My_typespace, T, any, each, integer, list, Ωhllt__29, Ωhllt__30;
        My_typespace = (function() {
          class My_typespace extends Typespace {
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

          //...................................................................................................
          My_typespace.list = {
            isa: function(x) {
              return Array.isArray(x);
            },
            values: function*(x) {
              return (yield* x);
            }
          };

          return My_typespace;

        }).call(this);
        //.....................................................................................................
        T = new My_typespace();
        ({each, any, list, integer} = T);
        // @eq ( Ωhllt__25 = -> each.isa       list, integer, [ 9987, ]           ), true
        // @eq ( Ωhllt__26 = -> any.isa        list, integer, [ 9987, ]           ), true
        // @eq ( Ωhllt__27 = -> each.validate  list, integer, [ 9987, ]           ), true
        // @eq ( Ωhllt__28 = -> any.validate   list, integer, [ 9987, ]           ), true
        this.eq((Ωhllt__29 = function() {
          return list.isa(each(integer, [9987]));
        }), true);
        this.eq((Ωhllt__30 = function() {
          return list.validate(each(integer, [9987]));
        }), true);
        // @eq ( Ωhllt__29 = -> list.isa       list.isa each integer, [ 9987, ]           ), true
        debug('Ωhllt__31', list.isa);
        debug('Ωhllt__32', list.isa.values);
        // debug 'Ωhllt__33', list.isa []
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtbmFub3R5cGVzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBO0lBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixXQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsT0FIRixFQUlFLEdBSkYsQ0FBQSxHQUk0QixHQUFHLENBQUMsR0FKaEMsRUFaQTs7O0VBa0JBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLDZDQUFSLEVBckI1Qjs7O0VBeUJBLElBQUMsQ0FBQSxLQUFELEdBR0UsQ0FBQTs7SUFBQSxrQkFBQSxFQUFvQixRQUFBLENBQUEsQ0FBQTtBQUN0QixVQUFBLElBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxJQUFGLEVBQ0UsU0FERixDQUFBLEdBQzhCLFNBQVMsQ0FB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S0FBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDtNQUNkLFdBQUEsR0FBYztRQUFFLGNBQUEsRUFBZ0IsSUFBbEI7UUFBMEIsV0FBQSxFQUFhLEtBQXZDO1FBQThDLGFBQUEsRUFBZTtNQUE3RDthQUNkLENBQUUsSUFBSSxJQUFKLENBQVMsV0FBVCxDQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBOEIsSUFBQyxDQUFBLEtBQS9CO0lBSHNDLENBQUEsSUFBeEM7OztFQXJNQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCdcblxuR1VZICAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJ2d1eSdcbnsgYWxlcnRcbiAgZGVidWdcbiAgaGVscFxuICBpbmZvXG4gIHBsYWluXG4gIHByYWlzZVxuICB1cmdlXG4gIHdhcm5cbiAgd2hpc3BlciB9ICAgICAgICAgICAgICAgPSBHVVkudHJtLmdldF9sb2dnZXJzICdob2xsZXJpdGgnXG57IHJwclxuICBpbnNwZWN0XG4gIGVjaG9cbiAgcmV2ZXJzZVxuICBsb2cgICAgIH0gICAgICAgICAgICAgICA9IEdVWS50cm1cbiMgV0dVWSAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvd2ViZ3V5J1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNpbmdsZS1maWxlLW1vZHVsZXMnXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5AdGFza3MgPVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdHlwZV9kYXRhX2hhbmRsaW5nOiAtPlxuICAgIHsgVHlwZSxcbiAgICAgIFR5cGVzcGFjZSwgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV9uYW5vdHlwZXMoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNsYXNzIE15X3R5cGVzcGFjZSBleHRlbmRzIFR5cGVzcGFjZVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBpbnRlZ2VyOiAoIHggKSAtPlxuICAgICAgICAgIEBhc3NpZ24geyB4LCB9XG4gICAgICAgICAgcmV0dXJuIHRydWUgaWYgTnVtYmVyLmlzU2FmZUludGVnZXIgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIGEgbm9uLWludGVnZXIgbnVtYmVyXCIsIHsgZnJhY3Rpb246IHggJSAxLCB9IGlmIE51bWJlci5pc0Zpbml0ZSB4XG4gICAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAZXZlbl9pbnRlZ2VyOiAoIHggKSAtPlxuICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwibm90IGFuIGludGVnZXJcIiAgICAgKSB1bmxlc3MgQFQuaW50ZWdlci5pc2EgeFxuICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwiZGV0ZWN0ZWQgcmVtYWluZGVyXCIgKSB1bmxlc3MgKCB4ICUlIDIgKSBpcyAwXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgVCA9IG5ldyBNeV90eXBlc3BhY2UoKVxuICAgICAgQGVxICggzqlobGx0X19fMSA9IC0+IFQuaW50ZWdlci5pc2EgOTk4NyAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0X19fMiA9IC0+IFQuaW50ZWdlci5kYXRhICAgICAgICAgICAgICAgKSwgeyB4OiA5OTg3LCB9XG4gICAgICBAZXEgKCDOqWhsbHRfX18zID0gLT4gVC5pbnRlZ2VyLmlzYSA5OTg3LjEyNSAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlobGx0X19fNCA9IC0+IFQuaW50ZWdlci5kYXRhICAgICAgICAgICAgICAgKSwgeyB4OiA5OTg3LjEyNSwgbWVzc2FnZTogJzk5ODcuMTI1IGlzIGEgbm9uLWludGVnZXIgbnVtYmVyJywgZnJhY3Rpb246IDAuMTI1LCB9XG4gICAgICBAZXEgKCDOqWhsbHRfX181ID0gLT4gVC5ldmVuX2ludGVnZXIuaXNhIDMzLjEyNSAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlobGx0X19fNiA9IC0+IFQuaW50ZWdlci5kYXRhICAgICAgICAgICAgICAgKSwgeyB4OiAzMy4xMjUsIG1lc3NhZ2U6ICczMy4xMjUgaXMgYSBub24taW50ZWdlciBudW1iZXInLCBmcmFjdGlvbjogMC4xMjUsIH1cbiAgICAgIEBlcSAoIM6paGxsdF9fXzcgPSAtPiBULmV2ZW5faW50ZWdlci5kYXRhICAgICAgICAgICksIHsgbWVzc2FnZTogJ25vdCBhbiBpbnRlZ2VyJyB9XG4gICAgICBAZXEgKCDOqWhsbHRfX184ID0gLT4gVC5ldmVuX2ludGVnZXIuaXNhIDc3NyAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqlobGx0X19fOSA9IC0+IFQuaW50ZWdlci5kYXRhICAgICAgICAgICAgICAgKSwgeyB4OiA3NzcsIH1cbiAgICAgIEBlcSAoIM6paGxsdF9fMTAgPSAtPiBULmV2ZW5faW50ZWdlci5kYXRhICAgICAgICAgICksIHsgbWVzc2FnZTogJ2RldGVjdGVkIHJlbWFpbmRlcicgfVxuICAgICAgQGVxICggzqlobGx0X18xMSA9IC0+IFQuZXZlbl9pbnRlZ2VyLmlzYSA4ODggICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0X18xMiA9IC0+IFQuaW50ZWdlci5kYXRhICAgICAgICAgICAgICAgKSwgeyB4OiA4ODgsIH1cbiAgICAgIEBlcSAoIM6paGxsdF9fMTMgPSAtPiBULmV2ZW5faW50ZWdlci5kYXRhICAgICAgICAgICksIHt9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2xhc3MgTXlfdHlwZXNwYWNlIGV4dGVuZHMgVHlwZXNwYWNlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgQGFzc2lnbiB7IHgsIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZSBpZiBOdW1iZXIuaXNTYWZlSW50ZWdlciB4XG4gICAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgYSBub24taW50ZWdlciBudW1iZXJcIiwgeyBmcmFjdGlvbjogeCAlIDEsIH0gaWYgTnVtYmVyLmlzRmluaXRlIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBldmVuX2ludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgIyB1bmxlc3MgQFQuaW50ZWdlci5pc2EgeCwgQGRhdGFcbiAgICAgICAgICAjICAgZGVidWcgJ86paGxsdF9fMTQnLCBAZGF0YVxuICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwibm90IGFuIGludGVnZXJcIiAgICAgKSB1bmxlc3MgQFQuaW50ZWdlci5pc2EgeCwgQGRhdGFcbiAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcImRldGVjdGVkIHJlbWFpbmRlclwiICkgdW5sZXNzICggeCAlJSAyICkgaXMgMFxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFQgPSBuZXcgTXlfdHlwZXNwYWNlKClcbiAgICAgIFQuZXZlbl9pbnRlZ2VyLmlzYSAnd2hhdD8nXG4gICAgICBAZXEgKCDOqWhsbHRfXzE1ID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgKSwgeyB4OiAnd2hhdD8nLCBtZXNzYWdlOiBcIid3aGF0PycgaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCIsIH1cbiAgICAgIEBlcSAoIM6paGxsdF9fMTYgPSAtPiBULmV2ZW5faW50ZWdlci5kYXRhICApLCB7IHg6ICd3aGF0PycsIG1lc3NhZ2U6IFwibm90IGFuIGludGVnZXJcIiwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICByZXR1cm4gbnVsbFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZG8gPT5cbiAgICAgIGNsYXNzIE15X3R5cGVzcGFjZSBleHRlbmRzIFR5cGVzcGFjZVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBpbnRlZ2VyOiAoIHggKSAtPlxuICAgICAgICAgIEBhc3NpZ24geyBtZTogJ2ludGVnZXInLCB9XG4gICAgICAgICAgQGFzc2lnbiB7IHgsIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZSBpZiBOdW1iZXIuaXNTYWZlSW50ZWdlciB4XG4gICAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgYSBub24taW50ZWdlciBudW1iZXJcIiwgeyBmcmFjdGlvbjogeCAlIDEsIH0gaWYgTnVtYmVyLmlzRmluaXRlIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBldmVuX2ludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgQGFzc2lnbiB7IG1lOiAnZXZlbl9pbnRlZ2VyJywgfVxuICAgICAgICAgIHVubGVzcyBAVC5pbnRlZ2VyLmlzYSB4LCBAZGF0YSwgeyBtZTogJ2ludGVnZXJfbWUnLCBtZXNzYWdlOiAnbWVzc2FnZV9mcm9tX2ludGVnZXInLCB9XG4gICAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcIm5vdCBhbiBpbnRlZ2VyOiAje3JwciBAZGF0YS5tZXNzYWdlX2Zyb21faW50ZWdlcn1cIiApXG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJkZXRlY3RlZCByZW1haW5kZXJcIiApIHVubGVzcyAoIHggJSUgMiApIGlzIDBcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBUID0gbmV3IE15X3R5cGVzcGFjZSgpXG4gICAgICBULmV2ZW5faW50ZWdlci5pc2EgJ3doYXQ/J1xuICAgICAgQGVxICggzqlobGx0X18xNyA9IC0+IFQuaW50ZWdlci5kYXRhICAgICAgICksIHsgbWU6ICdpbnRlZ2VyJywgeDogJ3doYXQ/JywgbWVzc2FnZTogXCInd2hhdD8nIGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiIH1cbiAgICAgIEBlcSAoIM6paGxsdF9fMTggPSAtPiBULmV2ZW5faW50ZWdlci5kYXRhICApLCB7XG4gICAgICAgIG1lOiAgICAgICAgICAgICAgICAgICAgICdldmVuX2ludGVnZXInLFxuICAgICAgICBpbnRlZ2VyX21lOiAgICAgICAgICAgICAnaW50ZWdlcicsXG4gICAgICAgIHg6ICAgICAgICAgICAgICAgICAgICAgICd3aGF0PycsXG4gICAgICAgIG1lc3NhZ2VfZnJvbV9pbnRlZ2VyOiAgIFwiJ3doYXQ/JyBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIixcbiAgICAgICAgbWVzc2FnZTogICAgICAgICAgICAgICAgXCJcIlwibm90IGFuIGludGVnZXI6IFwiJ3doYXQ/JyBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcXFwiXCJcIlwiLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFQuZXZlbl9pbnRlZ2VyLmlzYSAyNlxuICAgICAgZGVidWcgJ86paGxsdF9fMTknLCBULmludGVnZXIuZGF0YVxuICAgICAgZGVidWcgJ86paGxsdF9fMjAnLCBULmV2ZW5faW50ZWdlci5kYXRhXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2xhc3MgTXlfdHlwZXNwYWNlIGV4dGVuZHMgVHlwZXNwYWNlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgQGFzc2lnbiB7IG1lOiAnaW50ZWdlcicsIH1cbiAgICAgICAgICBAYXNzaWduIHsgeCwgfVxuICAgICAgICAgIHJldHVybiB0cnVlIGlmIE51bWJlci5pc1NhZmVJbnRlZ2VyIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlclwiLCB7IGZyYWN0aW9uOiB4ICUgMSwgfSBpZiBOdW1iZXIuaXNGaW5pdGUgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGV2ZW5faW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICBAYXNzaWduIHsgbWU6ICdldmVuX2ludGVnZXInLCB9XG4gICAgICAgICAgdW5sZXNzIEBULmludGVnZXIuaXNhIHgsIEBkYXRhLCB7IG1lOiAnaW50ZWdlcl9tZScsIG1lc3NhZ2U6ICdtZXNzYWdlX2Zyb21faW50ZWdlcicsIH1cbiAgICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwibm90IGFuIGludGVnZXI6ICN7cnByIEBkYXRhLm1lc3NhZ2VfZnJvbV9pbnRlZ2VyfVwiIClcbiAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcImRldGVjdGVkIHJlbWFpbmRlclwiICkgdW5sZXNzICggeCAlJSAyICkgaXMgMFxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFQgPSBuZXcgTXlfdHlwZXNwYWNlKClcbiAgICAgIFQuZXZlbl9pbnRlZ2VyLmlzYSAnd2hhdD8nXG4gICAgICBAZXEgKCDOqWhsbHRfXzIxID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgKSwgeyBtZTogJ2ludGVnZXInLCB4OiAnd2hhdD8nLCBtZXNzYWdlOiBcIid3aGF0PycgaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCIgfVxuICAgICAgQGVxICggzqlobGx0X18yMiA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICksIHtcbiAgICAgICAgbWU6ICAgICAgICAgICAgICAgICAgICAgJ2V2ZW5faW50ZWdlcicsXG4gICAgICAgIGludGVnZXJfbWU6ICAgICAgICAgICAgICdpbnRlZ2VyJyxcbiAgICAgICAgeDogICAgICAgICAgICAgICAgICAgICAgJ3doYXQ/JyxcbiAgICAgICAgbWVzc2FnZV9mcm9tX2ludGVnZXI6ICAgXCInd2hhdD8nIGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiLFxuICAgICAgICBtZXNzYWdlOiAgICAgICAgICAgICAgICBcIlwiXCJub3QgYW4gaW50ZWdlcjogXCInd2hhdD8nIGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclxcXCJcIlwiXCIsIH1cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgVC5ldmVuX2ludGVnZXIuaXNhIDI2XG4gICAgICBkZWJ1ZyAnzqlobGx0X18yMycsIFQuaW50ZWdlci5kYXRhXG4gICAgICBkZWJ1ZyAnzqlobGx0X18yNCcsIFQuZXZlbl9pbnRlZ2VyLmRhdGFcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICByZXR1cm4gbnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29tcG9zZWRfdHlwZXM6IC0+XG4gICAgeyBUeXBlLFxuICAgICAgVHlwZXNwYWNlLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX25hbm90eXBlcygpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2xhc3MgTXlfdHlwZXNwYWNlIGV4dGVuZHMgVHlwZXNwYWNlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgQGFzc2lnbiB7IHgsIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZSBpZiBOdW1iZXIuaXNTYWZlSW50ZWdlciB4XG4gICAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgYSBub24taW50ZWdlciBudW1iZXJcIiwgeyBmcmFjdGlvbjogeCAlIDEsIH0gaWYgTnVtYmVyLmlzRmluaXRlIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBldmVuX2ludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJub3QgYW4gaW50ZWdlclwiICAgICApIHVubGVzcyBAVC5pbnRlZ2VyLmlzYSB4XG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCJkZXRlY3RlZCByZW1haW5kZXJcIiApIHVubGVzcyAoIHggJSUgMiApIGlzIDBcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBsaXN0OlxuICAgICAgICAgIGlzYTogICAgICAoIHggKSAtPiBBcnJheS5pc0FycmF5IHhcbiAgICAgICAgICB2YWx1ZXM6ICAgKCB4ICkgLT4geWllbGQgZnJvbSB4XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFQgPSBuZXcgTXlfdHlwZXNwYWNlKClcbiAgICAgIHsgZWFjaCxcbiAgICAgICAgYW55LFxuICAgICAgICBsaXN0LFxuICAgICAgICBpbnRlZ2VyLCAgfSA9IFRcbiAgICAgICMgQGVxICggzqlobGx0X18yNSA9IC0+IGVhY2guaXNhICAgICAgIGxpc3QsIGludGVnZXIsIFsgOTk4NywgXSAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgIyBAZXEgKCDOqWhsbHRfXzI2ID0gLT4gYW55LmlzYSAgICAgICAgbGlzdCwgaW50ZWdlciwgWyA5OTg3LCBdICAgICAgICAgICApLCB0cnVlXG4gICAgICAjIEBlcSAoIM6paGxsdF9fMjcgPSAtPiBlYWNoLnZhbGlkYXRlICBsaXN0LCBpbnRlZ2VyLCBbIDk5ODcsIF0gICAgICAgICAgICksIHRydWVcbiAgICAgICMgQGVxICggzqlobGx0X18yOCA9IC0+IGFueS52YWxpZGF0ZSAgIGxpc3QsIGludGVnZXIsIFsgOTk4NywgXSAgICAgICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqlobGx0X18yOSA9IC0+IGxpc3QuaXNhICAgICAgIGVhY2ggaW50ZWdlciwgWyA5OTg3LCBdICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWhsbHRfXzMwID0gLT4gbGlzdC52YWxpZGF0ZSAgZWFjaCBpbnRlZ2VyLCBbIDk5ODcsIF0gICAgICAgICAgICksIHRydWVcbiAgICAgICMgQGVxICggzqlobGx0X18yOSA9IC0+IGxpc3QuaXNhICAgICAgIGxpc3QuaXNhIGVhY2ggaW50ZWdlciwgWyA5OTg3LCBdICAgICAgICAgICApLCB0cnVlXG4gICAgICBkZWJ1ZyAnzqlobGx0X18zMScsIGxpc3QuaXNhXG4gICAgICBkZWJ1ZyAnzqlobGx0X18zMicsIGxpc3QuaXNhLnZhbHVlc1xuICAgICAgIyBkZWJ1ZyAnzqlobGx0X18zMycsIGxpc3QuaXNhIFtdXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgcmV0dXJuIG51bGxcblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IGZhbHNlLCAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICBndXl0ZXN0X2NmZyA9IHsgdGhyb3dfb25fZXJyb3I6IHRydWUsICAgc2hvd19wYXNzZXM6IGZhbHNlLCByZXBvcnRfY2hlY2tzOiBmYWxzZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCBAdGFza3NcbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHR5cGVfZGF0YV9oYW5kbGluZzogQHRhc2tzLnR5cGVfZGF0YV9oYW5kbGluZywgfVxuIl19
