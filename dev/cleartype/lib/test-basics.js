(async function() {
  'use strict';
  var GTNG, GUY, Test, alert, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('intertype/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  //###########################################################################################################

  //===========================================================================================================
  this.cleartype_tasks = {
    //=========================================================================================================
    basics: function() {
      var CT, Type, std, type, typename;
      CT = require('../../../apps/cleartype');
      ({Type, std} = CT);
      info('Ω___1', Object.keys(CT));
      info('Ω___2', CT.std);
      (() => {
        var Ωcltt___3, Ωcltt___4, Ωcltt___5, Ωcltt___6, Ωcltt___7;
        this.eq((Ωcltt___3 = function() {
          return CT.type_of != null;
        }), true);
        this.eq((Ωcltt___4 = function() {
          return CT.Type != null;
        }), true);
        this.eq((Ωcltt___5 = function() {
          return CT.Typespace != null;
        }), true);
        this.eq((Ωcltt___6 = function() {
          return CT.internals != null;
        }), true);
        return this.eq((Ωcltt___7 = function() {
          return CT.std != null;
        }), true);
      })();
      (() => {
        echo();
        info('Ω___8', std.integer);
        info('Ω___9', std.integer.isa(3.141));
        info('Ω__10', std.integer.isa(3));
        info('Ω__11', std.integer.create());
        return info('Ω__12', std.integer.create('3'));
      })();
      (() => {
        var Ωcltt__13, Ωcltt__14, Ωcltt__15, Ωcltt__16, Ωcltt__17, Ωcltt__18, Ωcltt__19;
        this.eq((Ωcltt__13 = function() {
          return std.text instanceof Type;
        }), true);
        this.eq((Ωcltt__14 = function() {
          return std.float instanceof Type;
        }), true);
        this.eq((Ωcltt__15 = function() {
          return std.integer instanceof Type;
        }), true);
        this.eq((Ωcltt__16 = function() {
          return std.nonempty_text instanceof Type;
        }), true);
        this.eq((Ωcltt__17 = function() {
          return std.quantity_q instanceof Type;
        }), true);
        this.eq((Ωcltt__18 = function() {
          return std.quantity_u instanceof Type;
        }), true);
        return this.eq((Ωcltt__19 = function() {
          return std.quantity instanceof Type;
        }), true);
      })();
      (() => {
        var Ωcltt__20, Ωcltt__21, Ωcltt__22, Ωcltt__23, Ωcltt__24, Ωcltt__25, Ωcltt__26;
        this.eq((Ωcltt__20 = function() {
          return std.text.constructor.name;
        }), 'Text');
        this.eq((Ωcltt__21 = function() {
          return std.float.constructor.name;
        }), 'Float');
        this.eq((Ωcltt__22 = function() {
          return std.integer.constructor.name;
        }), 'Integer');
        this.eq((Ωcltt__23 = function() {
          return std.nonempty_text.constructor.name;
        }), 'Nonempty_text');
        this.eq((Ωcltt__24 = function() {
          return std.quantity_q.constructor.name;
        }), 'Quantity_q');
        this.eq((Ωcltt__25 = function() {
          return std.quantity_u.constructor.name;
        }), 'Quantity_u');
        return this.eq((Ωcltt__26 = function() {
          return std.quantity.constructor.name;
        }), 'Quantity');
      })();
      (() => {
        var Ωcltt__27, Ωcltt__28, Ωcltt__29, Ωcltt__30, Ωcltt__31, Ωcltt__32, Ωcltt__33;
        this.eq((Ωcltt__27 = function() {
          return std.text.isa.name;
        }), 'isa_text');
        this.eq((Ωcltt__28 = function() {
          return std.float.isa.name;
        }), 'isa_float');
        this.eq((Ωcltt__29 = function() {
          return std.integer.isa.name;
        }), 'isa_integer');
        this.eq((Ωcltt__30 = function() {
          return std.nonempty_text.isa.name;
        }), 'isa_nonempty_text');
        this.eq((Ωcltt__31 = function() {
          return std.quantity_q.isa.name;
        }), 'isa_quantity_q');
        this.eq((Ωcltt__32 = function() {
          return std.quantity_u.isa.name;
        }), 'isa_quantity_u');
        return this.eq((Ωcltt__33 = function() {
          return std.quantity.isa.name;
        }), 'isa_quantity');
      })();
      (() => {
        var Ωcltt__34, Ωcltt__35, Ωcltt__36, Ωcltt__37, Ωcltt__38, Ωcltt__39, Ωcltt__40;
        this.eq((Ωcltt__34 = function() {
          return std.text.isa(null);
        }), false);
        this.eq((Ωcltt__35 = function() {
          return std.float.isa(null);
        }), false);
        this.eq((Ωcltt__36 = function() {
          return std.integer.isa(null);
        }), false);
        this.eq((Ωcltt__37 = function() {
          return std.nonempty_text.isa(null);
        }), false);
        this.eq((Ωcltt__38 = function() {
          return std.quantity_q.isa(null);
        }), false);
        this.eq((Ωcltt__39 = function() {
          return std.quantity_u.isa(null);
        }), false);
        return this.eq((Ωcltt__40 = function() {
          return std.quantity.isa(null);
        }), false);
      })();
      (() => {
        var Ωcltt__41, Ωcltt__42, Ωcltt__43, Ωcltt__44, Ωcltt__45, Ωcltt__46, Ωcltt__47;
        this.eq((Ωcltt__41 = function() {
          return std.text.isa(2e308);
        }), false);
        this.eq((Ωcltt__42 = function() {
          return std.float.isa(2e308);
        }), false);
        this.eq((Ωcltt__43 = function() {
          return std.integer.isa(2e308);
        }), false);
        this.eq((Ωcltt__44 = function() {
          return std.nonempty_text.isa(2e308);
        }), false);
        this.eq((Ωcltt__45 = function() {
          return std.quantity_q.isa(2e308);
        }), false);
        this.eq((Ωcltt__46 = function() {
          return std.quantity_u.isa(2e308);
        }), false);
        return this.eq((Ωcltt__47 = function() {
          return std.quantity.isa(2e308);
        }), false);
      })();
      (() => {
        var Ωcltt__48, Ωcltt__49, Ωcltt__50, Ωcltt__51, Ωcltt__52, Ωcltt__53, Ωcltt__54;
        this.eq((Ωcltt__48 = function() {
          return std.text.isa('');
        }), true);
        this.eq((Ωcltt__49 = function() {
          return std.float.isa(7.56);
        }), true);
        this.eq((Ωcltt__50 = function() {
          return std.integer.isa(9);
        }), true);
        this.eq((Ωcltt__51 = function() {
          return std.nonempty_text.isa('www');
        }), true);
        this.eq((Ωcltt__52 = function() {
          return std.quantity_q.isa(1.5e32);
        }), true);
        this.eq((Ωcltt__53 = function() {
          return std.quantity_u.isa('km');
        }), true);
        return this.eq((Ωcltt__54 = function() {
          return std.quantity.isa({
            q: 1.5e32,
            u: 'km'
          });
        }), true);
      })();
      (() => {
        var Ωcltt__56, Ωcltt__57, Ωcltt__58, Ωcltt__59, Ωcltt__60, Ωcltt__61, Ωcltt__62, Ωcltt__63, Ωcltt__64, Ωcltt__65, Ωcltt__66;
        echo();
        info('Ω__55', std.nonempty_text);
        this.eq((Ωcltt__56 = function() {
          return std.nonempty_text.isa(3.141);
        }), false);
        this.eq((Ωcltt__57 = function() {
          return std.nonempty_text.isa('');
        }), false);
        this.eq((Ωcltt__58 = function() {
          return std.nonempty_text.isa('d');
        }), true);
        this.eq((Ωcltt__59 = function() {
          return std.text.create();
        }), '');
        this.eq((Ωcltt__60 = function() {
          return std.nonempty_text.create('wat');
        }), 'wat');
        this.throws((Ωcltt__61 = function() {
          return std.nonempty_text.create();
        }), /validation/i);
        this.throws((Ωcltt__62 = function() {
          return std.nonempty_text.create('');
        }), /validation/i);
        this.throws((Ωcltt__63 = function() {
          return std.nonempty_text.create(null);
        }), /validation/i);
        this.throws((Ωcltt__64 = function() {
          return std.nonempty_text.create(void 0);
        }), /validation/i);
        this.throws((Ωcltt__65 = function() {
          return std.nonempty_text.create(false);
        }), /validation/i);
        return this.eq((Ωcltt__66 = function() {
          return std.nonempty_text.create('d');
        }), 'd');
      })();
      (() => {
        var Ωcltt__68, Ωcltt__69, Ωcltt__70, Ωcltt__71, Ωcltt__72, Ωcltt__73;
        echo();
        info('Ω__67', std.quantity);
        this.eq((Ωcltt__68 = function() {
          return std.quantity.create();
        }), {
          q: 0,
          u: 'u'
        });
        this.eq((Ωcltt__69 = function() {
          return std.quantity.create({
            q: 4.3,
            u: 's'
          });
        }), {
          q: 4.3,
          u: 's'
        });
        this.eq((Ωcltt__70 = function() {
          return std.nonempty_text.create('g');
        }), 'g');
        this.eq((Ωcltt__71 = function() {
          return std.quantity_u.create('g');
        }), 'g');
        this.eq((Ωcltt__72 = function() {
          return std.quantity.fields.u.create('g');
        }), 'g');
        return this.throws((Ωcltt__73 = function() {
          return std.quantity.fields.u.create(false);
        }), /validation/i);
      })();
      (() => {
        var Ωcltt__79, Ωcltt__80, Ωcltt__81, Ωcltt__82, Ωcltt__83, Ωcltt__84, Ωcltt__85, Ωcltt__86, Ωcltt__92, Ωcltt__93;
        echo();
        help('Ω__74', std.quantity);
        help('Ω__75', std.quantity.constructor);
        help('Ω__76', std.quantity.constructor.name);
        help('Ω__77', std.quantity.isa);
        help('Ω__78', std.quantity.isa({}));
        this.eq((Ωcltt__79 = function() {
          return std.quantity.isa({
            u: 7,
            q: 3
          });
        }), false);
        this.eq((Ωcltt__80 = function() {
          return std.quantity.isa({
            u: '7',
            q: 3
          });
        }), true);
        this.eq((Ωcltt__81 = function() {
          return std.quantity.isa({
            u: '7',
            q: 2e308
          });
        }), false);
        this.eq((Ωcltt__82 = function() {
          return std.quantity.isa({
            u: '7',
            q: 0/0
          });
        }), false);
        this.eq((Ωcltt__83 = function() {
          return std.quantity.name;
        }), 'quantity');
        this.eq((Ωcltt__84 = function() {
          return std.integer.name;
        }), 'integer');
        this.eq((Ωcltt__85 = function() {
          return std.quantity_q.name;
        }), 'quantity_q');
        this.eq((Ωcltt__86 = function() {
          return std.quantity_u.name;
        }), 'quantity_u');
        echo();
        help('Ω__87', std.text.isa);
        help('Ω__88', std.text.isa('abc'));
        help('Ω__89', std.text.isa(Array.from('abc')));
        echo();
        help('Ω__90', std.nonempty_text);
        help('Ω__91', std.nonempty_text.isa);
        this.eq((Ωcltt__92 = function() {
          return std.nonempty_text.isa('abc');
        }), true);
        this.eq((Ωcltt__93 = function() {
          return std.nonempty_text.isa(Array.from('abc'));
        }), false);
        return null;
      })();
      (() => {
        var type, typename, Ωcltt__94, Ωcltt__95, Ωcltt__96;
        echo();
        for (typename in std) {
          type = std[typename];
          this.eq((Ωcltt__94 = function() {
            return type.name;
          }), typename);
          this.eq((Ωcltt__95 = function() {
            return type.isa.name;
          }), `isa_${typename}`);
          this.eq((Ωcltt__96 = function() {
            return type.create.name;
          }), `create_${typename}`);
          debug('Ω__97', [typename, type.create.name]);
        }
        return null;
      })();
//.......................................................................................................
      for (typename in std) {
        type = std[typename];
        urge('Ω__98', f`${typename}:<20c; ${type.constructor.name}:<20c; ${type.isa.name}:<20c;`);
      }
      //.......................................................................................................
      debug('Ω__99', 'integer                 template  ', std.integer.template);
      debug('Ω_100', 'integer                 fields    ', std.integer.fields);
      debug('Ω_101', 'quantity                template  ', std.quantity.template);
      debug('Ω_102', 'quantity                fields    ', std.quantity.fields);
      debug('Ω_103', 'quantity_with_template  template  ', std.quantity_with_template.template);
      debug('Ω_104', 'quantity_with_template  fields    ', std.quantity_with_template.fields);
      //.......................................................................................................
      return null;
    },
    //=========================================================================================================
    templates: function() {
      var Type, internals, std;
      ({Type, internals, std} = require('../../../apps/cleartype'));
      (() => {
        var Ωcltt_105, Ωcltt_106, Ωcltt_107, Ωcltt_108, Ωcltt_109;
        this.eq((Ωcltt_105 = function() {
          return std.text.template != null;
        }), true);
        this.eq((Ωcltt_106 = function() {
          return internals.gnd.function.isa(std.text.template);
        }), false);
        this.eq((Ωcltt_107 = function() {
          return internals.gnd.function.isa(std.text.get_template);
        }), true);
        this.eq((Ωcltt_108 = function() {
          return std.text.template;
        }), '');
        this.eq((Ωcltt_109 = function() {
          return std.text.get_template();
        }), '');
        return null;
      })();
      (() => {
        var Ωcltt_110, Ωcltt_111, Ωcltt_112, Ωcltt_113, Ωcltt_114, Ωcltt_115;
        this.eq((Ωcltt_110 = function() {
          return std.list.template != null;
        }), true);
        this.eq((Ωcltt_111 = function() {
          return internals.gnd.function.isa(std.list.template);
        }), true);
        this.eq((Ωcltt_112 = function() {
          return internals.gnd.function.isa(std.list.get_template);
        }), true);
        this.eq((Ωcltt_113 = function() {
          return std.list.template();
        }), []);
        this.eq((Ωcltt_114 = function() {
          return std.list.get_template();
        }), []);
        this.eq((Ωcltt_115 = function() {
          return std.list.get_template() === std.list.get_template();
        }), false);
        return null;
      })();
      (() => {
        var Ωcltt_116, Ωcltt_117, Ωcltt_118, Ωcltt_119, Ωcltt_120, Ωcltt_121;
        this.eq((Ωcltt_116 = function() {
          return std.quantity.template != null;
        }), true);
        this.eq((Ωcltt_117 = function() {
          return internals.gnd.function.isa(std.quantity.template);
        }), true);
        this.eq((Ωcltt_118 = function() {
          return internals.gnd.function.isa(std.quantity.get_template);
        }), true);
        this.eq((Ωcltt_119 = function() {
          return std.quantity.template();
        }), []);
        this.eq((Ωcltt_120 = function() {
          return std.quantity.get_template();
        }), []);
        this.eq((Ωcltt_121 = function() {
          return std.quantity.get_template() === std.list.get_template();
        }), false);
        return null;
      })();
      //.......................................................................................................
      return null;
    },
    //=========================================================================================================
    builtins: {
      //-------------------------------------------------------------------------------------------------------
      property_is_set: function() {
        var BI, Ωctt_122, Ωctt_123, Ωctt_124, Ωctt_125, Ωctt_126, Ωctt_127, Ωctt_128, Ωctt_129, Ωctt_130, Ωctt_131, Ωctt_132, Ωctt_133, Ωctt_134, Ωctt_135, Ωctt_136;
        BI = require('../../../apps/cleartype/lib/builtins');
        //.....................................................................................................
        this.eq((Ωctt_122 = function() {
          return BI.type_of(BI.unset);
        }), 'unset');
        this.eq((Ωctt_123 = function() {
          return BI.gnd.unset.isa(BI.unset);
        }), true);
        this.eq((Ωctt_124 = function() {
          return BI.gnd.symbol.isa(BI.unset);
        }), true);
        this.eq((Ωctt_125 = function() {
          return BI.type_of(BI.property_is_set);
        }), 'function');
        this.eq((Ωctt_126 = function() {
          return BI.type_of(BI.property_is_unset);
        }), 'function');
        //.....................................................................................................
        this.eq((Ωctt_127 = function() {
          return BI.property_is_set({}, 'd');
        }), false);
        this.eq((Ωctt_128 = function() {
          return BI.property_is_set({
            d: BI.unset
          }, 'd');
        }), false);
        //.....................................................................................................
        this.eq((Ωctt_129 = function() {
          return BI.property_is_set({
            d: null
          }, 'd');
        }), true);
        this.eq((Ωctt_130 = function() {
          return BI.property_is_set({
            d: void 0
          }, 'd');
        }), true);
        this.eq((Ωctt_131 = function() {
          return BI.property_is_set({
            d: Symbol('unset')
          }, 'd');
        }), true);
        //.....................................................................................................
        this.eq((Ωctt_132 = function() {
          return BI.property_is_unset({}, 'd');
        }), true);
        this.eq((Ωctt_133 = function() {
          return BI.property_is_unset({
            d: BI.unset
          }, 'd');
        }), true);
        //.....................................................................................................
        this.eq((Ωctt_134 = function() {
          return BI.property_is_unset({
            d: null
          }, 'd');
        }), false);
        this.eq((Ωctt_135 = function() {
          return BI.property_is_unset({
            d: void 0
          }, 'd');
        }), false);
        this.eq((Ωctt_136 = function() {
          return BI.property_is_unset({
            d: Symbol('unset')
          }, 'd');
        }), false);
        //.....................................................................................................
        return null;
      },
      //-------------------------------------------------------------------------------------------------------
      type_of: function() {
        var BI, Ωctt_137, Ωctt_138, Ωctt_139, Ωctt_140, Ωctt_141, Ωctt_142, Ωctt_143, Ωctt_144, Ωctt_145, Ωctt_146, Ωctt_147, Ωctt_148, Ωctt_149, Ωctt_150, Ωctt_151;
        BI = require('../../../apps/cleartype/lib/builtins');
        this.eq((Ωctt_137 = function() {
          return BI.type_of(null);
        }), 'null');
        this.eq((Ωctt_138 = function() {
          return BI.type_of(void 0);
        }), 'undefined');
        this.eq((Ωctt_139 = function() {
          return BI.type_of(+2e308);
        }), 'infinity');
        this.eq((Ωctt_140 = function() {
          return BI.type_of(-2e308);
        }), 'infinity');
        this.eq((Ωctt_141 = function() {
          return BI.type_of(true);
        }), 'boolean');
        this.eq((Ωctt_142 = function() {
          return BI.type_of(false);
        }), 'boolean');
        this.eq((Ωctt_143 = function() {
          return BI.type_of(0/0);
        }), 'nan');
        this.eq((Ωctt_144 = function() {
          return BI.type_of(8);
        }), 'float');
        this.eq((Ωctt_145 = function() {
          return BI.type_of(/xxx/);
        }), 'regex');
        this.eq((Ωctt_146 = function() {
          return BI.type_of('xyz');
        }), 'text');
        this.eq((Ωctt_147 = function() {
          return BI.type_of(['xyz']);
        }), 'list');
        this.eq((Ωctt_148 = function() {
          return BI.type_of({});
        }), 'object');
        this.eq((Ωctt_149 = function() {
          return BI.type_of(Symbol('s'));
        }), 'symbol');
        this.eq((Ωctt_150 = function() {
          return BI.type_of(Symbol.for('s'));
        }), 'symbol');
        this.eq((Ωctt_151 = function() {
          return BI.type_of(BI.unset);
        }), 'unset');
        //.....................................................................................................
        return null;
      }
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg;
      guytest_cfg = {
        throw_on_error: true,
        show_passes: false,
        report_checks: false
      };
      guytest_cfg = {
        throw_on_error: false,
        show_passes: false,
        report_checks: false
      };
      return (new Test(guytest_cfg)).test(this.cleartype_tasks);
    })();
  }

  // ( new Test guytest_cfg ).test @cleartype_tasks.builtins

}).call(this);

//# sourceMappingURL=test-basics.js.map