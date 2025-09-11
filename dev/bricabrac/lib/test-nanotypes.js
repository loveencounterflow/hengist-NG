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
        this.eq((Ωbbntt___1 = function() {
          return T.integer.isa(9987);
        }), true);
        this.eq((Ωbbntt___2 = function() {
          return T.integer.data;
        }), {
          x: 9987
        });
        this.eq((Ωbbntt___3 = function() {
          return T.integer.isa(9987.125);
        }), false);
        this.eq((Ωbbntt___4 = function() {
          return T.integer.data;
        }), {
          x: 9987.125,
          message: '9987.125 is a non-integer number',
          fraction: 0.125
        });
        this.eq((Ωbbntt___5 = function() {
          return T.even_integer.isa(33.125);
        }), false);
        this.eq((Ωbbntt___6 = function() {
          return T.integer.data;
        }), {
          x: 33.125,
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
        }), {
          x: 777
        });
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
        }), {
          x: 888
        });
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
          x: 'what?',
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
          var data, e, Ωbbntt__43, Ωbbntt__44, Ωbbntt__49, Ωbbntt__50;
          whisper('Ωbbntt__41', '—————————————————————————————————————————————————————————————————————————————');
          data = {};
          help('Ωbbntt__42', T.list_of.dm(data, {
            message: 'msg'
          }, function() {
            return T.list_of.isa([2, 4, 7], T.even_integer);
          }));
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
            T.list_of.validate([1.3], T.even_integer);
          } catch (error) {
            e = error;
            warn('Ωbbntt__48', reverse(e.message));
          }
          this.throws((Ωbbntt__49 = function() {
            return T.list_of.dm(data, {
              message: 'msg'
            }, function() {
              return T.list_of.validate([2, 4, 7], T.even_integer);
            });
          }), /not a valid list_of/);
          this.eq((Ωbbntt__50 = function() {
            return T.list_of.dm(data, {
              message: 'msg'
            }, function() {
              return T.list_of.validate([2, 4, 8], T.even_integer);
            });
          }), [2, 4, 8]);
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

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtbmFub3R5cGVzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUFBO0FBQUEsTUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBO0lBQUE7O0VBRUEsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixXQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsT0FIRixFQUlFLEdBSkYsQ0FBQSxHQUk0QixHQUFHLENBQUMsR0FKaEMsRUFaQTs7O0VBa0JBLElBQUEsR0FBNEIsT0FBQSxDQUFRLDJCQUFSOztFQUM1QixDQUFBLENBQUUsSUFBRixDQUFBLEdBQTRCLElBQTVCOztFQUNBLENBQUEsQ0FBRSxDQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFRLHlCQUFSLENBQTVCOztFQUNBLFNBQUEsR0FBNEIsT0FBQSxDQUFRLDZDQUFSLEVBckI1Qjs7O0VBeUJBLElBQUMsQ0FBQSxLQUFELEdBR0UsQ0FBQTs7SUFBQSxrQkFBQSxFQUFvQixRQUFBLENBQUEsQ0FBQTtBQUN0QixVQUFBLElBQUEsRUFBQTtNQUFJLENBQUEsQ0FBRSxJQUFGLEVBQ0UsU0FERixDQUFBLEdBQzhCLFNBQVMsQ0FB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Q0FBbUIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBbkIsRUFBaUMsQ0FBQyxDQUFDLFlBQW5DO1lBQUgsQ0FBeEM7VUFBSCxDQUFmLENBQVIsRUFBd0gsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBeEg7QUFDQSxpQkFBTztRQVpOLENBQUEsSUEvQ1Q7O0FBNkRNLGVBQU87TUE5RE4sQ0FBQTtBQStESCxhQUFPO0lBbkV3QjtFQTlIakMsRUE1QkY7OztFQWlPQSxJQUFHLE1BQUEsS0FBVSxPQUFPLENBQUMsSUFBckI7SUFBK0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUE7TUFBRSxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLEtBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7TUFDZCxXQUFBLEdBQWM7UUFBRSxjQUFBLEVBQWdCLElBQWxCO1FBQTBCLFdBQUEsRUFBYSxLQUF2QztRQUE4QyxhQUFBLEVBQWU7TUFBN0Q7YUFDZCxDQUFFLElBQUksSUFBSixDQUFTLFdBQVQsQ0FBRixDQUF3QixDQUFDLElBQXpCLENBQThCLElBQUMsQ0FBQSxLQUEvQjtJQUhzQyxDQUFBLElBQXhDOztBQWpPQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnaG9sbGVyaXRoJ1xueyBycHJcbiAgaW5zcGVjdFxuICBlY2hvXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG4jIFdHVVkgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL3dlYmd1eSdcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcbnsgZiB9ICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2VmZnN0cmluZydcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zaW5nbGUtZmlsZS1tb2R1bGVzJ1xuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRhc2tzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHR5cGVfZGF0YV9oYW5kbGluZzogLT5cbiAgICB7IFR5cGUsXG4gICAgICBUeXBlc3BhY2UsICAgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfbmFub3R5cGVzKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjbGFzcyBNeV90eXBlc3BhY2UgZXh0ZW5kcyBUeXBlc3BhY2VcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAaW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICBAYXNzaWduIHsgeCwgfVxuICAgICAgICAgIHJldHVybiB0cnVlIGlmIE51bWJlci5pc1NhZmVJbnRlZ2VyIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlclwiLCB7IGZyYWN0aW9uOiB4ICUgMSwgfSBpZiBOdW1iZXIuaXNGaW5pdGUgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGV2ZW5faW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcIm5vdCBhbiBpbnRlZ2VyXCIgICAgICkgdW5sZXNzIEBULmludGVnZXIuaXNhIHhcbiAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcImRldGVjdGVkIHJlbWFpbmRlclwiICkgdW5sZXNzICggeCAlJSAyICkgaXMgMFxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFQgPSBuZXcgTXlfdHlwZXNwYWNlKClcbiAgICAgIEBlcSAoIM6pYmJudHRfX18xID0gLT4gVC5pbnRlZ2VyLmlzYSA5OTg3ICAgICAgICAgICApLCB0cnVlXG4gICAgICBAZXEgKCDOqWJibnR0X19fMiA9IC0+IFQuaW50ZWdlci5kYXRhICAgICAgICAgICAgICAgKSwgeyB4OiA5OTg3LCB9XG4gICAgICBAZXEgKCDOqWJibnR0X19fMyA9IC0+IFQuaW50ZWdlci5pc2EgOTk4Ny4xMjUgICAgICAgKSwgZmFsc2VcbiAgICAgIEBlcSAoIM6pYmJudHRfX180ID0gLT4gVC5pbnRlZ2VyLmRhdGEgICAgICAgICAgICAgICApLCB7IHg6IDk5ODcuMTI1LCBtZXNzYWdlOiAnOTk4Ny4xMjUgaXMgYSBub24taW50ZWdlciBudW1iZXInLCBmcmFjdGlvbjogMC4xMjUsIH1cbiAgICAgIEBlcSAoIM6pYmJudHRfX181ID0gLT4gVC5ldmVuX2ludGVnZXIuaXNhIDMzLjEyNSAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqliYm50dF9fXzYgPSAtPiBULmludGVnZXIuZGF0YSAgICAgICAgICAgICAgICksIHsgeDogMzMuMTI1LCBtZXNzYWdlOiAnMzMuMTI1IGlzIGEgbm9uLWludGVnZXIgbnVtYmVyJywgZnJhY3Rpb246IDAuMTI1LCB9XG4gICAgICBAZXEgKCDOqWJibnR0X19fNyA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICAgICAgICAgKSwgeyBtZXNzYWdlOiAnbm90IGFuIGludGVnZXInIH1cbiAgICAgIEBlcSAoIM6pYmJudHRfX184ID0gLT4gVC5ldmVuX2ludGVnZXIuaXNhIDc3NyAgICAgICApLCBmYWxzZVxuICAgICAgQGVxICggzqliYm50dF9fXzkgPSAtPiBULmludGVnZXIuZGF0YSAgICAgICAgICAgICAgICksIHsgeDogNzc3LCB9XG4gICAgICBAZXEgKCDOqWJibnR0X18xMCA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICAgICAgICAgKSwgeyBtZXNzYWdlOiAnZGV0ZWN0ZWQgcmVtYWluZGVyJyB9XG4gICAgICBAZXEgKCDOqWJibnR0X18xMSA9IC0+IFQuZXZlbl9pbnRlZ2VyLmlzYSA4ODggICAgICAgKSwgdHJ1ZVxuICAgICAgQGVxICggzqliYm50dF9fMTIgPSAtPiBULmludGVnZXIuZGF0YSAgICAgICAgICAgICAgICksIHsgeDogODg4LCB9XG4gICAgICBAZXEgKCDOqWJibnR0X18xMyA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICAgICAgICAgKSwge31cbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIGRvID0+XG4gICAgICBjbGFzcyBNeV90eXBlc3BhY2UgZXh0ZW5kcyBUeXBlc3BhY2VcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAaW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICBAYXNzaWduIHsgeCwgfVxuICAgICAgICAgIHJldHVybiB0cnVlIGlmIE51bWJlci5pc1NhZmVJbnRlZ2VyIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlclwiLCB7IGZyYWN0aW9uOiB4ICUgMSwgfSBpZiBOdW1iZXIuaXNGaW5pdGUgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGV2ZW5faW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICAjIHVubGVzcyBAVC5pbnRlZ2VyLmlzYSB4LCBAZGF0YVxuICAgICAgICAgICMgICBkZWJ1ZyAnzqliYm50dF9fMTQnLCBAZGF0YVxuICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwibm90IGFuIGludGVnZXJcIiAgICAgKSB1bmxlc3MgQFQuaW50ZWdlci5pc2EgeCwgQGRhdGFcbiAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcImRldGVjdGVkIHJlbWFpbmRlclwiICkgdW5sZXNzICggeCAlJSAyICkgaXMgMFxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFQgPSBuZXcgTXlfdHlwZXNwYWNlKClcbiAgICAgIFQuZXZlbl9pbnRlZ2VyLmlzYSAnd2hhdD8nXG4gICAgICBAZXEgKCDOqWJibnR0X18xNSA9IC0+IFQuaW50ZWdlci5kYXRhICAgICAgICksIHsgeDogJ3doYXQ/JywgbWVzc2FnZTogXCInd2hhdD8nIGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiLCB9XG4gICAgICBAZXEgKCDOqWJibnR0X18xNiA9IC0+IFQuZXZlbl9pbnRlZ2VyLmRhdGEgICksIHsgeDogJ3doYXQ/JywgbWVzc2FnZTogXCJub3QgYW4gaW50ZWdlclwiLCB9XG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2xhc3MgTXlfdHlwZXNwYWNlIGV4dGVuZHMgVHlwZXNwYWNlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgQGFzc2lnbiB7IG1lOiAnaW50ZWdlcicsIH1cbiAgICAgICAgICBAYXNzaWduIHsgeCwgfVxuICAgICAgICAgIHJldHVybiB0cnVlIGlmIE51bWJlci5pc1NhZmVJbnRlZ2VyIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlclwiLCB7IGZyYWN0aW9uOiB4ICUgMSwgfSBpZiBOdW1iZXIuaXNGaW5pdGUgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGV2ZW5faW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICBAYXNzaWduIHsgbWU6ICdldmVuX2ludGVnZXInLCB9XG4gICAgICAgICAgdW5sZXNzIEBULmludGVnZXIuaXNhIHgsIEBkYXRhLCB7IG1lOiAnaW50ZWdlcl9tZScsIG1lc3NhZ2U6ICdtZXNzYWdlX2Zyb21faW50ZWdlcicsIH1cbiAgICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwibm90IGFuIGludGVnZXI6ICN7cnByIEBkYXRhLm1lc3NhZ2VfZnJvbV9pbnRlZ2VyfVwiIClcbiAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcImRldGVjdGVkIHJlbWFpbmRlclwiICkgdW5sZXNzICggeCAlJSAyICkgaXMgMFxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFQgPSBuZXcgTXlfdHlwZXNwYWNlKClcbiAgICAgIFQuZXZlbl9pbnRlZ2VyLmlzYSAnd2hhdD8nXG4gICAgICBAZXEgKCDOqWJibnR0X18xNyA9IC0+IFQuaW50ZWdlci5kYXRhICAgICAgICksIHsgbWU6ICdpbnRlZ2VyJywgeDogJ3doYXQ/JywgbWVzc2FnZTogXCInd2hhdD8nIGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiIH1cbiAgICAgIEBlcSAoIM6pYmJudHRfXzE4ID0gLT4gVC5ldmVuX2ludGVnZXIuZGF0YSAgKSwge1xuICAgICAgICBtZTogICAgICAgICAgICAgICAgICAgICAnZXZlbl9pbnRlZ2VyJyxcbiAgICAgICAgaW50ZWdlcl9tZTogICAgICAgICAgICAgJ2ludGVnZXInLFxuICAgICAgICB4OiAgICAgICAgICAgICAgICAgICAgICAnd2hhdD8nLFxuICAgICAgICBtZXNzYWdlX2Zyb21faW50ZWdlcjogICBcIid3aGF0PycgaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCIsXG4gICAgICAgIG1lc3NhZ2U6ICAgICAgICAgICAgICAgIFwiXCJcIm5vdCBhbiBpbnRlZ2VyOiBcIid3aGF0PycgaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXFxcIlwiXCJcIiwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBULmV2ZW5faW50ZWdlci5pc2EgMjZcbiAgICAgIGRlYnVnICfOqWJibnR0X18xOScsIFQuaW50ZWdlci5kYXRhXG4gICAgICBkZWJ1ZyAnzqliYm50dF9fMjAnLCBULmV2ZW5faW50ZWdlci5kYXRhXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2xhc3MgTXlfdHlwZXNwYWNlIGV4dGVuZHMgVHlwZXNwYWNlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgQGFzc2lnbiB7IG1lOiAnaW50ZWdlcicsIH1cbiAgICAgICAgICBAYXNzaWduIHsgeCwgfVxuICAgICAgICAgIHJldHVybiB0cnVlIGlmIE51bWJlci5pc1NhZmVJbnRlZ2VyIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBhIG5vbi1pbnRlZ2VyIG51bWJlclwiLCB7IGZyYWN0aW9uOiB4ICUgMSwgfSBpZiBOdW1iZXIuaXNGaW5pdGUgeFxuICAgICAgICAgIHJldHVybiBAZmFpbCBcIiN7cnByIHh9IGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGV2ZW5faW50ZWdlcjogKCB4ICkgLT5cbiAgICAgICAgICBAYXNzaWduIHsgbWU6ICdldmVuX2ludGVnZXInLCB9XG4gICAgICAgICAgdW5sZXNzIEBULmludGVnZXIuaXNhIHgsIEBkYXRhLCB7IG1lOiAnaW50ZWdlcl9tZScsIG1lc3NhZ2U6ICdtZXNzYWdlX2Zyb21faW50ZWdlcicsIH1cbiAgICAgICAgICAgIHJldHVybiAoIEBmYWlsIFwibm90IGFuIGludGVnZXI6ICN7cnByIEBkYXRhLm1lc3NhZ2VfZnJvbV9pbnRlZ2VyfVwiIClcbiAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcImRldGVjdGVkIHJlbWFpbmRlclwiICkgdW5sZXNzICggeCAlJSAyICkgaXMgMFxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIFQgPSBuZXcgTXlfdHlwZXNwYWNlKClcbiAgICAgIFQuZXZlbl9pbnRlZ2VyLmlzYSAnd2hhdD8nXG4gICAgICBAZXEgKCDOqWJibnR0X18yMSA9IC0+IFQuaW50ZWdlci5kYXRhICAgICAgICksIHsgbWU6ICdpbnRlZ2VyJywgeDogJ3doYXQ/JywgbWVzc2FnZTogXCInd2hhdD8nIGlzIG5vdCBldmVuIGEgZmluaXRlIG51bWJlclwiIH1cbiAgICAgIEBlcSAoIM6pYmJudHRfXzIyID0gLT4gVC5ldmVuX2ludGVnZXIuZGF0YSAgKSwge1xuICAgICAgICBtZTogICAgICAgICAgICAgICAgICAgICAnZXZlbl9pbnRlZ2VyJyxcbiAgICAgICAgaW50ZWdlcl9tZTogICAgICAgICAgICAgJ2ludGVnZXInLFxuICAgICAgICB4OiAgICAgICAgICAgICAgICAgICAgICAnd2hhdD8nLFxuICAgICAgICBtZXNzYWdlX2Zyb21faW50ZWdlcjogICBcIid3aGF0PycgaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXCIsXG4gICAgICAgIG1lc3NhZ2U6ICAgICAgICAgICAgICAgIFwiXCJcIm5vdCBhbiBpbnRlZ2VyOiBcIid3aGF0PycgaXMgbm90IGV2ZW4gYSBmaW5pdGUgbnVtYmVyXFxcIlwiXCJcIiwgfVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBULmV2ZW5faW50ZWdlci5pc2EgMjZcbiAgICAgIGRlYnVnICfOqWJibnR0X18yMycsIFQuaW50ZWdlci5kYXRhXG4gICAgICBkZWJ1ZyAnzqliYm50dF9fMjQnLCBULmV2ZW5faW50ZWdlci5kYXRhXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIHJldHVybiBudWxsXG4gICAgcmV0dXJuIG51bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG5hbm90eXBlc192Ml9wYXJhbWV0cml6ZWRfdHlwZXM6IC0+XG4gICAgeyBUeXBlLFxuICAgICAgVHlwZXNwYWNlLCAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX25hbm90eXBlc192MigpXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBkbyA9PlxuICAgICAgY2xhc3MgTXlfdHlwZXNwYWNlIGV4dGVuZHMgVHlwZXNwYWNlXG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgQGFzc2lnbiB7IHgsIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZSBpZiBOdW1iZXIuaXNTYWZlSW50ZWdlciB4XG4gICAgICAgICAgcmV0dXJuIEBmYWlsIFwiI3tycHIgeH0gaXMgYSBub24taW50ZWdlciBudW1iZXJcIiwgeyBmcmFjdGlvbjogeCAlIDEsIH0gaWYgTnVtYmVyLmlzRmluaXRlIHhcbiAgICAgICAgICByZXR1cm4gQGZhaWwgXCIje3JwciB4fSBpcyBub3QgZXZlbiBhIGZpbml0ZSBudW1iZXJcIlxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIEBldmVuX2ludGVnZXI6ICggeCApIC0+XG4gICAgICAgICAgcmV0dXJuICggQGZhaWwgXCIje3JwciB4fSBpc24ndCBhbiBpbnRlZ2VyXCIgICkgdW5sZXNzIEBULmludGVnZXIuaXNhIHhcbiAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcIiN7cnByIHh9IGlzbid0IGV2ZW5cIiAgICAgICAgKSB1bmxlc3MgKCB4ICUlIDIgKSBpcyAwXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBAbGlzdDogKCB4ICkgLT4gQXJyYXkuaXNBcnJheSB4XG4gICAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgQGxpc3Rfb2Y6ICggeCwgZWxlbWVudF90eXBlID0gbnVsbCApIC0+XG4gICAgICAgICAgIyBpbmZvICfOqWJibnR0X18yNScsICdsaXN0X29mJywgeyB4LCBlbGVtZW50X3R5cGUsIH1cbiAgICAgICAgICByZXR1cm4gKCBAZmFpbCBcIm5vdCBhIGxpc3RcIiApIHVubGVzcyBAVC5saXN0LmlzYSB4XG4gICAgICAgICAgcmV0dXJuIHRydWUgdW5sZXNzIGVsZW1lbnRfdHlwZT9cbiAgICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgIGZvciBlbGVtZW50LCBpZHggaW4geFxuICAgICAgICAgICAgdW5sZXNzIGVsZW1lbnRfdHlwZS5pc2EgZWxlbWVudFxuICAgICAgICAgICAgICBtZXNzYWdlICAgPSBcImVsZW1lbnQgYXQgaW5kZXggI3tpZHh9IGlzbid0IGEgI3tlbGVtZW50X3R5cGUuZnVsbF9uYW1lfVwiXG4gICAgICAgICAgICAgIG1lc3NhZ2UgICs9IFwiIOKAkyAje2VsZW1lbnRfdHlwZS5kYXRhLm1lc3NhZ2V9XCIgaWYgZWxlbWVudF90eXBlPy5kYXRhPy5tZXNzYWdlP1xuICAgICAgICAgICAgICByZXR1cm4gKCBAZmFpbCBtZXNzYWdlIClcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICBUID0gbmV3IE15X3R5cGVzcGFjZSgpXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHdoaXNwZXIgJ86pYmJudHRfXzI2JywgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgICAgICAgaGVscCAnzqliYm50dF9fMjcnLCBULmxpc3Rfb2YubmFtZVxuICAgICAgICBoZWxwICfOqWJibnR0X18yOCcsIFQubGlzdF9vZi5mdWxsX25hbWVcbiAgICAgICAgaGVscCAnzqliYm50dF9fMjknLCBULmxpc3Rfb2YuaXNhIFsgNSwgXSwgVC5pbnRlZ2VyXG4gICAgICAgIGluZm8gJ86pYmJudHRfXzMwJywgVC5saXN0X29mLmlucHV0c1xuICAgICAgICBpbmZvICfOqWJibnR0X18zMScsIFQubGlzdF9vZi5pbnB1dHNbIDAgXVxuICAgICAgICBoZWxwICfOqWJibnR0X18zMicsIFQubGlzdF9vZi5mdWxsX25hbWVcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgZG8gPT5cbiAgICAgICAgd2hpc3BlciAnzqliYm50dF9fMzMnLCAn4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUJ1xuICAgICAgICBoZWxwICfOqWJibnR0X18zNCcsIFQubGlzdC5pc2EgICAgWyAyLCA0LCA2LCBdXG4gICAgICAgIGhlbHAgJ86pYmJudHRfXzM1JywgVC5saXN0X29mLmlzYSBbIDIsIDQsIDYsIF07ICAgICAgICAgICAgICAgICB3YXJuICfOqWJibnR0X18zNicsIFQubGlzdF9vZi5kYXRhXG4gICAgICAgIGhlbHAgJ86pYmJudHRfXzM3JywgVC5saXN0X29mLmlzYSBbIDIsIDQsIDYsIF0sIFQuZXZlbl9pbnRlZ2VyOyB3YXJuICfOqWJibnR0X18zOCcsIFQubGlzdF9vZi5kYXRhXG4gICAgICAgIGhlbHAgJ86pYmJudHRfXzM5JywgVC5saXN0X29mLmlzYSBbIDIsIDQsIDcsIF0sIFQuZXZlbl9pbnRlZ2VyOyB3YXJuICfOqWJibnR0X180MCcsIFQubGlzdF9vZi5kYXRhXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgIGRvID0+XG4gICAgICAgIHdoaXNwZXIgJ86pYmJudHRfXzQxJywgJ+KAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCdcbiAgICAgICAgZGF0YSA9IHt9XG4gICAgICAgIGhlbHAgJ86pYmJudHRfXzQyJywgVC5saXN0X29mLmRtIGRhdGEsIHsgbWVzc2FnZTogJ21zZycsIH0sIC0+IFQubGlzdF9vZi5pc2EgWyAyLCA0LCA3LCBdLCBULmV2ZW5faW50ZWdlclxuICAgICAgICBAZXEgICAgICggzqliYm50dF9fNDMgPSAtPiBULmxpc3Rfb2YuZGF0YSApLCB7IG1lc3NhZ2U6IFwiZWxlbWVudCBhdCBpbmRleCAyIGlzbid0IGEgZXZlbl9pbnRlZ2VyIOKAkyA3IGlzbid0IGV2ZW5cIiB9XG4gICAgICAgIEBlcSAgICAgKCDOqWJibnR0X180NCA9IC0+IGRhdGEgICAgICAgICAgICksIHsgICAgIG1zZzogXCJlbGVtZW50IGF0IGluZGV4IDIgaXNuJ3QgYSBldmVuX2ludGVnZXIg4oCTIDcgaXNuJ3QgZXZlblwiIH1cbiAgICAgICAgdHJ5IFQubGlzdF9vZi52YWxpZGF0ZSBbIDIsIDQsIDcsIF0sICBULmV2ZW5faW50ZWdlciBjYXRjaCBlIHRoZW4gd2FybiAnzqliYm50dF9fNDUnLCByZXZlcnNlIGUubWVzc2FnZVxuICAgICAgICB0cnkgVC5saXN0X29mLnZhbGlkYXRlIHRydWUsICAgICAgICAgIFQuZXZlbl9pbnRlZ2VyIGNhdGNoIGUgdGhlbiB3YXJuICfOqWJibnR0X180NicsIHJldmVyc2UgZS5tZXNzYWdlXG4gICAgICAgIHRyeSBULmxpc3Rfb2YudmFsaWRhdGUgW10sICAgICAgICAgICAgVC5ldmVuX2ludGVnZXIgY2F0Y2ggZSB0aGVuIHdhcm4gJ86pYmJudHRfXzQ3JywgcmV2ZXJzZSBlLm1lc3NhZ2VcbiAgICAgICAgdHJ5IFQubGlzdF9vZi52YWxpZGF0ZSBbIDEuMywgXSwgICAgICBULmV2ZW5faW50ZWdlciBjYXRjaCBlIHRoZW4gd2FybiAnzqliYm50dF9fNDgnLCByZXZlcnNlIGUubWVzc2FnZVxuICAgICAgICBAdGhyb3dzICggzqliYm50dF9fNDkgPSAtPiBULmxpc3Rfb2YuZG0gZGF0YSwgeyBtZXNzYWdlOiAnbXNnJywgfSwgLT4gVC5saXN0X29mLnZhbGlkYXRlIFsgMiwgNCwgNywgXSwgVC5ldmVuX2ludGVnZXIgKSwgL25vdCBhIHZhbGlkIGxpc3Rfb2YvXG4gICAgICAgIEBlcSAgICAgKCDOqWJibnR0X181MCA9IC0+IFQubGlzdF9vZi5kbSBkYXRhLCB7IG1lc3NhZ2U6ICdtc2cnLCB9LCAtPiBULmxpc3Rfb2YudmFsaWRhdGUgWyAyLCA0LCA4LCBdLCBULmV2ZW5faW50ZWdlciApLCBbIDIsIDQsIDgsIF1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgcmV0dXJuIG51bGxcbiAgICByZXR1cm4gbnVsbFxuXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gICggbmV3IFRlc3QgZ3V5dGVzdF9jZmcgKS50ZXN0IEB0YXNrc1xuIl19
