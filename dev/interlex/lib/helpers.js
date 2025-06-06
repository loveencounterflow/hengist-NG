(function() {
  'use strict';
  var GTNG, GUY, Test, abbrlxm, alert, condense_lexemes, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, tabulate_lexeme, tabulate_lexemes, urge, warn, whisper;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('interlex/test-basics'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  //===========================================================================================================
  condense_lexemes = function(lexemes) {
    var lexeme;
    if (!Array.isArray(lexemes)) {
      lexemes = [lexemes];
    }
    return ((function() {
      var ref, ref1, results;
      results = [];
      for (lexeme of lexemes) {
        results.push(`${(ref = lexeme != null ? lexeme.fqname : void 0) != null ? ref : null}${rpr((ref1 = lexeme != null ? lexeme.hit : void 0) != null ? ref1 : null)}`);
      }
      return results;
    })()).join('|');
  };

  //-----------------------------------------------------------------------------------------------------------
  // abbrlxm = ( lxm ) -> {
  //   level:  lxm?.level?.name ? null,
  //   fqname: lxm?.fqname      ? null,
  //   hit:    lxm?.hit         ? null,
  //   pos:    ( if lxm? then "#{lxm.start}:#{lxm.stop}" else null ), }

  //-----------------------------------------------------------------------------------------------------------
  abbrlxm = function(lxm) {
    var R, ref;
    if (lxm == null) {
      return null;
    }
    R = {
      fqname: lxm.fqname,
      hit: lxm.hit,
      pos: `${lxm.lnr}:${lxm.start}:${lxm.stop}`
    };
    if (lxm.has_data) {
      R.data = {...lxm.data};
    }
    if ((ref = R.data) != null) {
      delete ref.ref;
    }
    return R;
  };

  //-----------------------------------------------------------------------------------------------------------
  tabulate_lexemes = function(lexemes) {
    var lexeme;
    for (lexeme of lexemes) {
      tabulate_lexeme(lexeme);
    }
    return lexemes;
  };

  //-----------------------------------------------------------------------------------------------------------
  tabulate_lexeme = function(lexeme) {
    var I, alxm, data_rpr, hit_rpr;
    if (lexeme == null) {
      urge('Ωilxt___1', lexeme);
    } else {
      alxm = abbrlxm(lexeme);
      hit_rpr = lexeme.hit === '' ? '' : rpr(lexeme.hit);
      data_rpr = lexeme.has_data ? rpr({...lexeme.data}) : '';
      I = GUY.trm.lime('▏');
      // g         = GUY.trm.gold
      urge('Ωilxt___2', f` ${I} ${lexeme.fqname}:<25c; ${I} ${hit_rpr}:<10c; ${I} ${alxm.pos}:<10c; ${I} ${data_rpr}:<50c; ${I}`);
    }
    return lexeme;
  };

  //===========================================================================================================
  module.exports = {condense_lexemes, abbrlxm, tabulate_lexemes, tabulate_lexeme};

}).call(this);

//# sourceMappingURL=helpers.js.map