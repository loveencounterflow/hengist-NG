(async function() {
  'use strict';
  var FS, GTNG, GUY, PATH, SFMODULES, Test, alert, blue, bold, debug, echo, f, gold, green, grey, help, info, inspect, log, nfa, plain, praise, red, require_find_repetitions, reverse, rpr, tests, type_of, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('bricabrac-dbric'));

  ({rpr, inspect, echo, white, green, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  // write                     = ( p ) -> process.stdout.write p
  ({nfa} = require('../../../apps/normalize-function-arguments'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

  FS = require('node:fs');

  PATH = require('node:path');

  ({type_of} = (require('../../../apps/bricabrac-sfmodules/lib/unstable-rpr-type_of-brics')).require_type_of());

  // #===========================================================================================================
  // remove = ( path ) ->
  //   try
  //     FS.unlinkSync path
  //     help 'Ωflrt___1', "removed #{rpr path}"
  //   catch error
  //     throw error unless error.code is 'ENOENT'
  //     urge 'Ωflrt___2', "no such FS object: #{rpr path}"
  //   return null

  //===========================================================================================================
  require_find_repetitions = function() {
    var as_text, find_all_repetitions, find_reduplication_candidates, is_purely_repetitive, is_shorter_than_two_chrs, repeated_chrs_re;
    //---------------------------------------------------------------------------------------------------------
    repeated_chrs_re = /(.)(?=.*\1)/gv;
    is_shorter_than_two_chrs = function(text) {
      return /^.?$/v.test(text);
    };
    //---------------------------------------------------------------------------------------------------------
    is_purely_repetitive = function(text) {
      var tt;
      if (is_shorter_than_two_chrs(text)) {
        /* Given a string, return whether it is 'wholly' (or 'purely') repetitive, that is, entirely
           representable as the repetition of a shorter substring. The established way to test for this condition
           for a given string `t` is to determine whether `t` is a substring of the test string concatenated with
           itself, after dropping the first and the last characters from the reduplicated string (in Python
           notation) `t in ( t + t )[ 1 : -1 ]` (so e.g. `abcabc` is a substring of `bcabcabcab`). Our solution is
           a little longer to account for JS's UTF-16 encoding. Also, we stipulate that all strings shorter than 2
           characters are not purely repetitive (note that 'dropping first and last characters' cannot be applied
           to strings shorter than two characters anyway). */
        return false;
      }
      tt = (text + text).replace(/^.(.*?).$/v, '$1');
      return (/* concat with self, drop first & last chr */tt.indexOf(text)) > -1;
    };
    //---------------------------------------------------------------------------------------------------------
    find_reduplication_candidates = function(text) {
      /* Given a `text`, return a `Map` from (potentially recurrent) substrings along with the
         (UTF-16-string-based, not character-based) index of their *first* occurrance in `t`. This reasoning for
         the set of substring returned is as follows: out of all substrings `s` of a given text `t` we only have
         to consider substrings up to half the length of `t`, otherwise there's no space in `t` to accommodate
         two or more non-overlapping occurences of `s`. Second, in order for there to be a repetitive substring
         `s`, at least the first character of `s` must occur more than once in `t`. Given a list of repetitive
         characters of `t` with their indices, we can then build a list of all candidate substrings that are not
         'too long' or are purely repetitive themselves, where 'too long' means that a substring at a certain
         position in `t` must have after it least as many characters as it itself has in order to be viable. */
      var R, candidate, chr, chrs, code_units, extra_count, extra_counts, i, idx_1, idx_2, j, len, len1, max_length, n, repeated_chrs;
      R = new Map();
      if (is_shorter_than_two_chrs(text)) {
        return R;
      }
      code_units = text.length/* b/c of UTF-16 */
      chrs = Array.from(text);
      max_length = Math.floor(chrs.length / 2);
      extra_counts = (function() {
        var i, ref, results;
        results = [];
        for (n = i = 1, ref = max_length; i < ref; n = i += +1) {
          results.push(n);
        }
        return results;
      })();
      repeated_chrs = new Set(text.match(repeated_chrs_re));
//.......................................................................................................
      for (idx_1 = i = 0, len = chrs.length; i < len; idx_1 = ++i) {
        chr = chrs[idx_1];
        if (!repeated_chrs.has(chr)) {
          continue;
        }
        if (!R.has(chr)) {
          R.set(chr, idx_1);
        }
        for (j = 0, len1 = extra_counts.length; j < len1; j++) {
          extra_count = extra_counts[j];
          idx_2 = idx_1 + extra_count;
          if (idx_2 >= chrs.length) {
            break;
          }
          // continue unless matches chr
          candidate = chrs.slice(idx_1, +idx_2 + 1 || 9e9).join('');
          if (R.has(candidate)) {
            continue;
          }
          if (idx_1 + candidate.length * 2 > code_units) {
            /* can abort as soon as candidate wouldn't fit into rest of text after its first occurrance: */
            break;
          }
          if (is_purely_repetitive(candidate)) {
            /* can forego candidates that are purely repetitive themselves: */
            continue;
          }
          R.set(candidate, idx_1);
        }
      }
      //.......................................................................................................
      return R;
    };
    //---------------------------------------------------------------------------------------------------------
    find_all_repetitions = function(word) {
      var R, candidate, candidates, idx_0, idx_1, idx_2, indexes, last_idx, x;
      R = new Map();
      candidates = find_reduplication_candidates(word);
//.......................................................................................................
      for (x of candidates) {
        [candidate, idx_0] = x;
        indexes = new Set([idx_0]);
        idx_1 = idx_0 + 1;
        while (true) {
          if (idx_1 > word.length/* TAINT: what about chrs beyond 0xffff? */) {
            break;
          }
          //...................................................................................................
          idx_2 = word.indexOf(candidate, idx_1);
          if (idx_2 < 0) {
            break;
          }
          //...................................................................................................
          idx_1 += 1;
          if (indexes.has(idx_2)) {
            continue;
          }
          //...................................................................................................
          /* NOTE: filter out overlapping matches like 'aba' in 'ababa' */
          last_idx = [...indexes].at(-1);
          if (last_idx + candidate.length > idx_2/* TAINT: what about chrs beyond 0xffff? */) {
/* TAINT should not have to use this cludge */            continue;
          }
          indexes.add(idx_2);
        }
        if (indexes.size > 1) {
          R.set(candidate, [...indexes]);
        }
      }
      //.......................................................................................................
      return R;
    };
    // #---------------------------------------------------------------------------------------------------------
    // as_text = ( repcs ) -> ( \
    //   "#{JSON.stringify sequence}:#{JSON.stringify indices}" for [ sequence, indices, ] from repcs ).join ','
    //---------------------------------------------------------------------------------------------------------
    as_text = function(repcs) {
      return JSON.stringify(Object.fromEntries(repcs));
    };
    return {
      //=========================================================================================================
      is_purely_repetitive,
      find_all_repetitions,
      internals: {repeated_chrs_re, is_shorter_than_two_chrs, find_reduplication_candidates, as_text}
    };
  };

  //===========================================================================================================
  this.tests = tests = {
    //---------------------------------------------------------------------------------------------------------
    interface: function() {
      var FREP, Ωcrmmd___7, Ωcrmmd___8, Ωcrmmd___9;
      FREP = require_find_repetitions();
      this.eq((Ωcrmmd___7 = function() {
        return type_of(FREP.is_purely_repetitive);
      }), 'function');
      this.eq((Ωcrmmd___8 = function() {
        return type_of(FREP.internals.find_reduplication_candidates);
      }), 'function');
      this.eq((Ωcrmmd___9 = function() {
        return type_of(FREP.find_all_repetitions);
      }), 'function');
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    is_shorter_than_two_chrs: function() {
      var internals, Ωcrmmd__10, Ωcrmmd__11, Ωcrmmd__12, Ωcrmmd__13, Ωcrmmd__14, Ωcrmmd__15, Ωcrmmd__16, Ωcrmmd__17, Ωcrmmd__18, Ωcrmmd__19;
      ({internals} = require_find_repetitions());
      //.......................................................................................................
      this.eq((Ωcrmmd__10 = function() {
        return internals.is_shorter_than_two_chrs('');
      }), true);
      this.eq((Ωcrmmd__11 = function() {
        return internals.is_shorter_than_two_chrs('a');
      }), true);
      this.eq((Ωcrmmd__12 = function() {
        return internals.is_shorter_than_two_chrs('aa');
      }), false);
      this.eq((Ωcrmmd__13 = function() {
        return internals.is_shorter_than_two_chrs('aaa');
      }), false);
      this.eq((Ωcrmmd__14 = function() {
        return internals.is_shorter_than_two_chrs('𪜅');
      }), true);
      this.eq((Ωcrmmd__15 = function() {
        return internals.is_shorter_than_two_chrs('𪜅a');
      }), false);
      this.eq((Ωcrmmd__16 = function() {
        return internals.is_shorter_than_two_chrs('𪜅aa');
      }), false);
      this.eq((Ωcrmmd__17 = function() {
        return internals.is_shorter_than_two_chrs('a𪜅');
      }), false);
      this.eq((Ωcrmmd__18 = function() {
        return internals.is_shorter_than_two_chrs('aa𪜅');
      }), false);
      this.eq((Ωcrmmd__19 = function() {
        return internals.is_shorter_than_two_chrs('𪜅𪜅');
      }), false);
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    is_purely_repetitive: function() {
      var is_purely_repetitive, Ωcrmmd__20, Ωcrmmd__21, Ωcrmmd__22, Ωcrmmd__23, Ωcrmmd__24, Ωcrmmd__25, Ωcrmmd__26, Ωcrmmd__27, Ωcrmmd__28, Ωcrmmd__29, Ωcrmmd__30, Ωcrmmd__31;
      ({is_purely_repetitive} = require_find_repetitions());
      //.......................................................................................................
      this.eq((Ωcrmmd__20 = function() {
        return is_purely_repetitive('');
      }), false);
      this.eq((Ωcrmmd__21 = function() {
        return is_purely_repetitive('a');
      }), false);
      this.eq((Ωcrmmd__22 = function() {
        return is_purely_repetitive('abc');
      }), false);
      this.eq((Ωcrmmd__23 = function() {
        return is_purely_repetitive('aaac');
      }), false);
      this.eq((Ωcrmmd__24 = function() {
        return is_purely_repetitive('abca');
      }), false);
      this.eq((Ωcrmmd__25 = function() {
        return is_purely_repetitive('aa');
      }), true);
      this.eq((Ωcrmmd__26 = function() {
        return is_purely_repetitive('aaa');
      }), true);
      this.eq((Ωcrmmd__27 = function() {
        return is_purely_repetitive('abcabc');
      }), true);
      this.eq((Ωcrmmd__28 = function() {
        return is_purely_repetitive('𪜀');
      }), false);
      this.eq((Ωcrmmd__29 = function() {
        return is_purely_repetitive('𪜀𪜀');
      }), true);
      this.eq((Ωcrmmd__30 = function() {
        return is_purely_repetitive('a𪜀𪜀');
      }), false);
      this.eq((Ωcrmmd__31 = function() {
        return is_purely_repetitive('a𪜀a𪜀');
      }), true);
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    find_reduplication_candidates: function() {
      var i, internals, len, matcher, probe, probes_and_matchers, result, Ωcrmmd__32;
      ({internals, internals} = require_find_repetitions());
      //.......................................................................................................
      probes_and_matchers = [['', '{}'], ['a', '{}'], ['aa', '{"a":0}'], ['abc', '{}'], ['abca', '{"a":0,"ab":0}'], ['abcab', '{"a":0,"ab":0,"b":1,"bc":1}'], ['abcabc', '{"a":0,"ab":0,"abc":0,"b":1,"bc":1,"c":2,"ca":2}'], ['𪜅𪜅', '{"𪜅":0}'], ['programmierung', '{"r":1,"ro":1,"rog":1,"rogr":1,"rogra":1,"rogram":1,"g":3,"gr":3,"gra":3,"gram":3,"gramm":3,"ra":4,"ram":4,"ramm":4,"rammi":4,"m":6,"mmi":6,"mmie":6,"mi":7,"mie":7,"ru":10}'], ['xxaaaabbbbccccxx', '{"x":0,"xxa":0,"xxaa":0,"xxaaa":0,"xxaaaa":0,"xxaaaab":0,"xxaaaabb":0,"xa":1,"xaa":1,"xaaa":1,"xaaaa":1,"xaaaab":1,"xaaaabb":1,"a":2,"aaaab":2,"aaaabb":2,"aaaabbb":2,"aaab":3,"aaabb":3,"aaabbb":3,"aab":4,"aabb":4,"aabbb":4,"aabbbb":4,"ab":5,"abb":5,"abbb":5,"abbbb":5,"b":6,"bbbbc":6,"bbbc":7,"bbc":8,"bbcc":8,"bc":9,"bcc":9,"c":10}'], ['xxabcabcabcabcxx', '{"x":0,"xxa":0,"xxab":0,"xxabc":0,"xxabca":0,"xxabcab":0,"xxabcabc":0,"xa":1,"xab":1,"xabc":1,"xabca":1,"xabcab":1,"xabcabc":1,"a":2,"ab":2,"abc":2,"abca":2,"abcab":2,"abcabca":2,"b":3,"bc":3,"bca":3,"bcab":3,"bcabc":3,"c":4,"ca":4,"cab":4,"cabc":4,"cabca":4}'], ['x0abcabcabcabcx0', '{"0":1,"x":0,"x0":0,"x0a":0,"x0ab":0,"x0abc":0,"x0abca":0,"x0abcab":0,"x0abcabc":0,"0a":1,"0ab":1,"0abc":1,"0abca":1,"0abcab":1,"0abcabc":1,"a":2,"ab":2,"abc":2,"abca":2,"abcab":2,"abcabca":2,"b":3,"bc":3,"bca":3,"bcab":3,"bcabc":3,"c":4,"ca":4,"cab":4,"cabc":4,"cabca":4}'], ['dfpqrstdf', '{"d":0,"df":0,"dfp":0,"dfpq":0,"f":1,"fp":1,"fpq":1,"fpqr":1}'], ['dfpqdstdf', '{"d":0,"df":0,"dfp":0,"dfpq":0,"f":1,"fp":1,"fpq":1,"fpqd":1,"ds":4}'], ['冂三三三三丅丅丅丅', '{"三":1,"三三丅":3,"三丅":4,"丅":5}'], ['⻗界界', '{"界":1}'], ['口口口口犬', '{"口":0}'], ['𪜀𪜀𪜀𪜀犬', '{"𪜀":0,"𪜀犬":3}'], ['口口犬口口', '{"口":0,"口犬":1}'], ['口犬口犬口', '{"口":0,"口犬":0,"犬":1,"犬口":1}'], ['𪜀犬𪜀犬𪜀', '{"𪜀":0,"𪜀犬":0,"犬":1,"犬𪜀":1}'], ['㗊犬', '{}'], ['哭吅', '{}'], ['吕吕', '{"吕":0}'], ['吅吅', '{"吅":0}'], ['口口', '{"口":0}'], ['口口', '{"口":0}']];
//.......................................................................................................
      for (i = 0, len = probes_and_matchers.length; i < len; i++) {
        [probe, matcher] = probes_and_matchers[i];
        result = internals.find_reduplication_candidates(probe);
        result = internals.as_text(result);
        // echo [ probe, result, ]
        this.eq((Ωcrmmd__32 = function() {
          return result;
        }), matcher);
      }
      //.......................................................................................................
      return null;
    },
    //---------------------------------------------------------------------------------------------------------
    find_all_repetitions: function() {
      var find_all_repetitions, i, internals, len, matcher, probe, probes_and_matchers, result, Ωcrmmd__33;
      ({find_all_repetitions, internals} = require_find_repetitions());
      //.......................................................................................................
      probes_and_matchers = [['', '{}'], ['a', '{}'], ['aa', '{"a":[0,1]}'], ['𪜅𪜅', '{"𪜅":[0,2]}'], ['programmierung', '{"r":[1,4,10],"g":[3,13],"m":[6,7]}'], ['xxaaaabbbbccccxx', '{"x":[0,1,14,15],"a":[2,3,4,5],"b":[6,7,8,9],"c":[10,11,12,13]}'], ['xxabcabcabcabcxx', '{"x":[0,1,14,15],"a":[2,5,8,11],"ab":[2,5,8,11],"abc":[2,5,8,11],"abca":[2,8],"abcab":[2,8],"b":[3,6,9,12],"bc":[3,6,9,12],"bca":[3,6,9],"bcab":[3,9],"bcabc":[3,9],"c":[4,7,10,13],"ca":[4,7,10],"cab":[4,7,10],"cabc":[4,10]}'], ['x0abcabcabcabcx0', '{"0":[1,15],"x":[0,14],"x0":[0,14],"a":[2,5,8,11],"ab":[2,5,8,11],"abc":[2,5,8,11],"abca":[2,8],"abcab":[2,8],"b":[3,6,9,12],"bc":[3,6,9,12],"bca":[3,6,9],"bcab":[3,9],"bcabc":[3,9],"c":[4,7,10,13],"ca":[4,7,10],"cab":[4,7,10],"cabc":[4,10]}'], ['dfpqrstdf', '{"d":[0,7],"df":[0,7],"f":[1,8]}'], ['dfpqdstdf', '{"d":[0,4,7],"df":[0,7],"f":[1,8]}'], ['冂三三三三丅丅丅丅', '{"三":[1,2,3,4],"丅":[5,6,7,8]}'], ['⻗界界', '{"界":[1,2]}'], ['口口口口犬', '{"口":[0,1,2,3]}'], ['𪜀𪜀𪜀𪜀犬', '{"𪜀":[0,2,4,6],"𪜀犬":[3,6]}'], ['口口犬口口', '{"口":[0,1,3,4]}'], ['口犬口犬口', '{"口":[0,2,4],"口犬":[0,2],"犬":[1,3],"犬口":[1,3]}'], ['𪜀犬𪜀犬𪜀', '{"𪜀":[0,3,6],"𪜀犬":[0,3],"犬":[1,2,5],"犬𪜀":[1,5]}'], ['㗊犬', '{}'], ['哭吅', '{}'], ['吕吕', '{"吕":[0,1]}'], ['吅吅', '{"吅":[0,1]}'], ['口口', '{"口":[0,1]}'], ['口口', '{"口":[0,1]}'], ['abacadaefghxaryarzar', '{"a":[0,2,4,6,12,15,18],"ar":[12,15,18],"r":[13,16,19]}']];
//.......................................................................................................
      for (i = 0, len = probes_and_matchers.length; i < len; i++) {
        [probe, matcher] = probes_and_matchers[i];
        result = find_all_repetitions(probe);
        result = internals.as_text(result);
        // echo [ probe, result, ]
        this.eq((Ωcrmmd__33 = function() {
          return result;
        }), matcher);
      }
      //.......................................................................................................
      return null;
    }
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var guytest_cfg;
      // demo_infinite_proxy()
      // demo_colorful_proxy()
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
      (new Test(guytest_cfg)).test({tests});
      // ( new Test guytest_cfg ).test { find_reduplication_candidates: tests.find_reduplication_candidates, }
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QtcmVwZXRpdGlvbi1maW5kZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQUE7QUFBQSxNQUFBLEVBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsd0JBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxPQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQTs7O0VBR0EsR0FBQSxHQUE0QixPQUFBLENBQVEsS0FBUjs7RUFDNUIsQ0FBQSxDQUFFLEtBQUYsRUFDRSxLQURGLEVBRUUsSUFGRixFQUdFLElBSEYsRUFJRSxLQUpGLEVBS0UsTUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsT0FSRixDQUFBLEdBUTRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBUixDQUFvQixpQkFBcEIsQ0FSNUI7O0VBU0EsQ0FBQSxDQUFFLEdBQUYsRUFDRSxPQURGLEVBRUUsSUFGRixFQUdFLEtBSEYsRUFJRSxLQUpGLEVBS0UsSUFMRixFQU1FLElBTkYsRUFPRSxJQVBGLEVBUUUsR0FSRixFQVNFLElBVEYsRUFVRSxPQVZGLEVBV0UsR0FYRixDQUFBLEdBVzRCLEdBQUcsQ0FBQyxHQVhoQzs7RUFZQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1QixFQXpCQTs7O0VBMkJBLENBQUEsQ0FBRSxHQUFGLENBQUEsR0FBNEIsT0FBQSxDQUFR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QSxDQUFxQixNQUFyQjtNQUFILENBQWYsQ0FBSixFQUEyRCxLQUEzRDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxvQkFBQSxDQUFxQixNQUFyQjtNQUFILENBQWYsQ0FBSixFQUEyRCxLQUEzRDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxvQkFBQSxDQUFxQixJQUFyQjtNQUFILENBQWYsQ0FBSixFQUEyRCxJQUEzRDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxvQkFBQSxDQUFxQixLQUFyQjtNQUFILENBQWYsQ0FBSixFQUEyRCxJQUEzRDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxvQkFBQSxDQUFxQixRQUFyQjtNQUFILENBQWYsQ0FBSixFQUEyRCxJQUEzRDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxvQkFBQSxDQUFxQixJQUFyQjtNQUFILENBQWYsQ0FBSixFQUEwRCxLQUExRDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxvQkFBQSxDQUFxQixNQUFyQjtNQUFILENBQWYsQ0FBSixFQUEyRCxJQUEzRDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxvQkFBQSxDQUFxQixPQUFyQjtNQUFILENBQWYsQ0FBSixFQUEyRCxLQUEzRDtNQUNBLElBQUMsQ0FBQSxFQUFELENBQUksQ0FBRSxVQUFBLEdBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxvQkFBQSxDQUFxQixRQUFyQjtNQUFILENBQWYsQ0FBSixFQUEyRCxJQUEzRCxFQWJKOzthQWVLO0lBaEJtQixD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K0IsTUFBUyxDQUFBLENBQUEsQ0FBQSxHQUFBO0FBQ3hDLFVBQUEsV0FBQTs7O01BRUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsSUFBdkM7UUFBNkMsYUFBQSxFQUFlO01BQTVEO01BQ2QsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxJQUF6QixDQUE4QixDQUFFLEtBQUYsQ0FBOUIsRUFKRjs7YUFNRztJQVBxQyxDQUFBLElBQXhDOztBQXJSQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIHN0cmljdCdcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5HVVkgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZ3V5J1xueyBhbGVydFxuICBkZWJ1Z1xuICBoZWxwXG4gIGluZm9cbiAgcGxhaW5cbiAgcHJhaXNlXG4gIHVyZ2VcbiAgd2FyblxuICB3aGlzcGVyIH0gICAgICAgICAgICAgICA9IEdVWS50cm0uZ2V0X2xvZ2dlcnMgJ2JyaWNhYnJhYy1kYnJpYydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBibHVlXG4gIGdvbGRcbiAgZ3JleVxuICByZWRcbiAgYm9sZFxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxueyBmIH0gICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZWZmc3RyaW5nJ1xuIyB3cml0ZSAgICAgICAgICAgICAgICAgICAgID0gKCBwICkgLT4gcHJvY2Vzcy5zdGRvdXQud3JpdGUgcFxueyBuZmEgfSAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvbm9ybWFsaXplLWZ1bmN0aW9uLWFyZ3VtZW50cydcbkdUTkcgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2d1eS10ZXN0LU5HJ1xueyBUZXN0ICAgICAgICAgICAgICAgICAgfSA9IEdUTkdcblNGTU9EVUxFUyAgICAgICAgICAgICAgICAgPSByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMnXG5GUyAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnbm9kZTpmcydcblBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG57IHR5cGVfb2YsICAgICAgICAgICAgICB9ID0gKCByZXF1aXJlICcuLi8uLi8uLi9hcHBzL2JyaWNhYnJhYy1zZm1vZHVsZXMvbGliL3Vuc3RhYmxlLXJwci10eXBlX29mLWJyaWNzJyApLnJlcXVpcmVfdHlwZV9vZigpXG5cbiMgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4jIHJlbW92ZSA9ICggcGF0aCApIC0+XG4jICAgdHJ5XG4jICAgICBGUy51bmxpbmtTeW5jIHBhdGhcbiMgICAgIGhlbHAgJ86pZmxydF9fXzEnLCBcInJlbW92ZWQgI3tycHIgcGF0aH1cIlxuIyAgIGNhdGNoIGVycm9yXG4jICAgICB0aHJvdyBlcnJvciB1bmxlc3MgZXJyb3IuY29kZSBpcyAnRU5PRU5UJ1xuIyAgICAgdXJnZSAnzqlmbHJ0X19fMicsIFwibm8gc3VjaCBGUyBvYmplY3Q6ICN7cnByIHBhdGh9XCJcbiMgICByZXR1cm4gbnVsbFxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnJlcXVpcmVfZmluZF9yZXBldGl0aW9ucyA9IC0+XG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXBlYXRlZF9jaHJzX3JlICAgICAgICAgID0gLy8vICguKSAoPz0uKlxcMSkgLy8vZ3ZcbiAgaXNfc2hvcnRlcl90aGFuX3R3b19jaHJzICA9ICggdGV4dCApIC0+IC8vLyBeIC4/ICQgLy8vdi50ZXN0IHRleHRcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzX3B1cmVseV9yZXBldGl0aXZlID0gKCB0ZXh0ICkgLT5cbiAgICAjIyMgR2l2ZW4gYSBzdHJpbmcsIHJldHVybiB3aGV0aGVyIGl0IGlzICd3aG9sbHknIChvciAncHVyZWx5JykgcmVwZXRpdGl2ZSwgdGhhdCBpcywgZW50aXJlbHlcbiAgICByZXByZXNlbnRhYmxlIGFzIHRoZSByZXBldGl0aW9uIG9mIGEgc2hvcnRlciBzdWJzdHJpbmcuIFRoZSBlc3RhYmxpc2hlZCB3YXkgdG8gdGVzdCBmb3IgdGhpcyBjb25kaXRpb25cbiAgICBmb3IgYSBnaXZlbiBzdHJpbmcgYHRgIGlzIHRvIGRldGVybWluZSB3aGV0aGVyIGB0YCBpcyBhIHN1YnN0cmluZyBvZiB0aGUgdGVzdCBzdHJpbmcgY29uY2F0ZW5hdGVkIHdpdGhcbiAgICBpdHNlbGYsIGFmdGVyIGRyb3BwaW5nIHRoZSBmaXJzdCBhbmQgdGhlIGxhc3QgY2hhcmFjdGVycyBmcm9tIHRoZSByZWR1cGxpY2F0ZWQgc3RyaW5nIChpbiBQeXRob25cbiAgICBub3RhdGlvbikgYHQgaW4gKCB0ICsgdCApWyAxIDogLTEgXWAgKHNvIGUuZy4gYGFiY2FiY2AgaXMgYSBzdWJzdHJpbmcgb2YgYGJjYWJjYWJjYWJgKS4gT3VyIHNvbHV0aW9uIGlzXG4gICAgYSBsaXR0bGUgbG9uZ2VyIHRvIGFjY291bnQgZm9yIEpTJ3MgVVRGLTE2IGVuY29kaW5nLiBBbHNvLCB3ZSBzdGlwdWxhdGUgdGhhdCBhbGwgc3RyaW5ncyBzaG9ydGVyIHRoYW4gMlxuICAgIGNoYXJhY3RlcnMgYXJlIG5vdCBwdXJlbHkgcmVwZXRpdGl2ZSAobm90ZSB0aGF0ICdkcm9wcGluZyBmaXJzdCBhbmQgbGFzdCBjaGFyYWN0ZXJzJyBjYW5ub3QgYmUgYXBwbGllZFxuICAgIHRvIHN0cmluZ3Mgc2hvcnRlciB0aGFuIHR3byBjaGFyYWN0ZXJzIGFueXdheSkuICMjI1xuICAgIHJldHVybiBmYWxzZSBpZiBpc19zaG9ydGVyX3RoYW5fdHdvX2NocnMgdGV4dFxuICAgIHR0ID0gKCB0ZXh0ICsgdGV4dCApLnJlcGxhY2UgLy8vIF4gLiAoLio/KSAuJCAvLy92LCAnJDEnICMjIyBjb25jYXQgd2l0aCBzZWxmLCBkcm9wIGZpcnN0ICYgbGFzdCBjaHIgIyMjXG4gICAgcmV0dXJuICggdHQuaW5kZXhPZiB0ZXh0ICkgPiAtMVxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZmluZF9yZWR1cGxpY2F0aW9uX2NhbmRpZGF0ZXMgPSAoIHRleHQgKSAtPlxuICAgICMjIyBHaXZlbiBhIGB0ZXh0YCwgcmV0dXJuIGEgYE1hcGAgZnJvbSAocG90ZW50aWFsbHkgcmVjdXJyZW50KSBzdWJzdHJpbmdzIGFsb25nIHdpdGggdGhlXG4gICAgKFVURi0xNi1zdHJpbmctYmFzZWQsIG5vdCBjaGFyYWN0ZXItYmFzZWQpIGluZGV4IG9mIHRoZWlyICpmaXJzdCogb2NjdXJyYW5jZSBpbiBgdGAuIFRoaXMgcmVhc29uaW5nIGZvclxuICAgIHRoZSBzZXQgb2Ygc3Vic3RyaW5nIHJldHVybmVkIGlzIGFzIGZvbGxvd3M6IG91dCBvZiBhbGwgc3Vic3RyaW5ncyBgc2Agb2YgYSBnaXZlbiB0ZXh0IGB0YCB3ZSBvbmx5IGhhdmVcbiAgICB0byBjb25zaWRlciBzdWJzdHJpbmdzIHVwIHRvIGhhbGYgdGhlIGxlbmd0aCBvZiBgdGAsIG90aGVyd2lzZSB0aGVyZSdzIG5vIHNwYWNlIGluIGB0YCB0byBhY2NvbW1vZGF0ZVxuICAgIHR3byBvciBtb3JlIG5vbi1vdmVybGFwcGluZyBvY2N1cmVuY2VzIG9mIGBzYC4gU2Vjb25kLCBpbiBvcmRlciBmb3IgdGhlcmUgdG8gYmUgYSByZXBldGl0aXZlIHN1YnN0cmluZ1xuICAgIGBzYCwgYXQgbGVhc3QgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBgc2AgbXVzdCBvY2N1ciBtb3JlIHRoYW4gb25jZSBpbiBgdGAuIEdpdmVuIGEgbGlzdCBvZiByZXBldGl0aXZlXG4gICAgY2hhcmFjdGVycyBvZiBgdGAgd2l0aCB0aGVpciBpbmRpY2VzLCB3ZSBjYW4gdGhlbiBidWlsZCBhIGxpc3Qgb2YgYWxsIGNhbmRpZGF0ZSBzdWJzdHJpbmdzIHRoYXQgYXJlIG5vdFxuICAgICd0b28gbG9uZycgb3IgYXJlIHB1cmVseSByZXBldGl0aXZlIHRoZW1zZWx2ZXMsIHdoZXJlICd0b28gbG9uZycgbWVhbnMgdGhhdCBhIHN1YnN0cmluZyBhdCBhIGNlcnRhaW5cbiAgICBwb3NpdGlvbiBpbiBgdGAgbXVzdCBoYXZlIGFmdGVyIGl0IGxlYXN0IGFzIG1hbnkgY2hhcmFjdGVycyBhcyBpdCBpdHNlbGYgaGFzIGluIG9yZGVyIHRvIGJlIHZpYWJsZS4gIyMjXG4gICAgUiAgICAgICAgICAgICA9IG5ldyBNYXAoKVxuICAgIHJldHVybiBSIGlmIGlzX3Nob3J0ZXJfdGhhbl90d29fY2hycyB0ZXh0XG4gICAgY29kZV91bml0cyAgICA9IHRleHQubGVuZ3RoICMjIyBiL2Mgb2YgVVRGLTE2ICMjI1xuICAgIGNocnMgICAgICAgICAgPSBBcnJheS5mcm9tIHRleHRcbiAgICBtYXhfbGVuZ3RoICAgID0gY2hycy5sZW5ndGggLy8gMlxuICAgIGV4dHJhX2NvdW50cyAgPSAoIG4gZm9yIG4gaW4gWyAxIC4uLiBtYXhfbGVuZ3RoIF0gYnkgKzEgKVxuICAgIHJlcGVhdGVkX2NocnMgPSBuZXcgU2V0IHRleHQubWF0Y2ggcmVwZWF0ZWRfY2hyc19yZVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIGNociwgaWR4XzEgaW4gY2hyc1xuICAgICAgY29udGludWUgdW5sZXNzIHJlcGVhdGVkX2NocnMuaGFzIGNoclxuICAgICAgUi5zZXQgY2hyLCBpZHhfMSB1bmxlc3MgUi5oYXMgY2hyXG4gICAgICBmb3IgZXh0cmFfY291bnQgaW4gZXh0cmFfY291bnRzXG4gICAgICAgIGlkeF8yID0gaWR4XzEgKyBleHRyYV9jb3VudFxuICAgICAgICBicmVhayBpZiBpZHhfMiA+PSBjaHJzLmxlbmd0aFxuICAgICAgIyBjb250aW51ZSB1bmxlc3MgbWF0Y2hlcyBjaHJcbiAgICAgICAgY2FuZGlkYXRlID0gY2hyc1sgaWR4XzEgLi4gaWR4XzIgXS5qb2luICcnXG4gICAgICAgIGNvbnRpbnVlIGlmIFIuaGFzIGNhbmRpZGF0ZVxuICAgICAgICAjIyMgY2FuIGFib3J0IGFzIHNvb24gYXMgY2FuZGlkYXRlIHdvdWxkbid0IGZpdCBpbnRvIHJlc3Qgb2YgdGV4dCBhZnRlciBpdHMgZmlyc3Qgb2NjdXJyYW5jZTogIyMjXG4gICAgICAgIGJyZWFrIGlmIGlkeF8xICsgY2FuZGlkYXRlLmxlbmd0aCAqIDIgPiBjb2RlX3VuaXRzXG4gICAgICAgICMjIyBjYW4gZm9yZWdvIGNhbmRpZGF0ZXMgdGhhdCBhcmUgcHVyZWx5IHJlcGV0aXRpdmUgdGhlbXNlbHZlczogIyMjXG4gICAgICAgIGNvbnRpbnVlIGlmIGlzX3B1cmVseV9yZXBldGl0aXZlIGNhbmRpZGF0ZVxuICAgICAgICBSLnNldCBjYW5kaWRhdGUsIGlkeF8xXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICByZXR1cm4gUlxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZmluZF9hbGxfcmVwZXRpdGlvbnMgPSAoIHdvcmQgKSAtPlxuICAgIFIgICAgICAgICAgID0gbmV3IE1hcCgpXG4gICAgY2FuZGlkYXRlcyAgPSBmaW5kX3JlZHVwbGljYXRpb25fY2FuZGlkYXRlcyB3b3JkXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgWyBjYW5kaWRhdGUsIGlkeF8wLCBdIGZyb20gY2FuZGlkYXRlc1xuICAgICAgaW5kZXhlcyA9IG5ldyBTZXQgWyBpZHhfMCwgXVxuICAgICAgaWR4XzEgPSBpZHhfMCArIDFcbiAgICAgIGxvb3BcbiAgICAgICAgYnJlYWsgaWYgaWR4XzEgPiB3b3JkLmxlbmd0aCAjIyMgVEFJTlQ6IHdoYXQgYWJvdXQgY2hycyBiZXlvbmQgMHhmZmZmPyAjIyNcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICBpZHhfMiA9IHdvcmQuaW5kZXhPZiBjYW5kaWRhdGUsIGlkeF8xXG4gICAgICAgIGJyZWFrIGlmIGlkeF8yIDwgMFxuICAgICAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgIGlkeF8xICs9IDFcbiAgICAgICAgY29udGludWUgaWYgaW5kZXhlcy5oYXMgaWR4XzJcbiAgICAgICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAjIyMgTk9URTogZmlsdGVyIG91dCBvdmVybGFwcGluZyBtYXRjaGVzIGxpa2UgJ2FiYScgaW4gJ2FiYWJhJyAjIyNcbiAgICAgICAgbGFzdF9pZHggPSBbIGluZGV4ZXMuLi4sIF0uYXQgLTEgIyMjIFRBSU5UIHNob3VsZCBub3QgaGF2ZSB0byB1c2UgdGhpcyBjbHVkZ2UgIyMjXG4gICAgICAgIGNvbnRpbnVlIGlmIGxhc3RfaWR4ICsgY2FuZGlkYXRlLmxlbmd0aCA+IGlkeF8yICMjIyBUQUlOVDogd2hhdCBhYm91dCBjaHJzIGJleW9uZCAweGZmZmY/ICMjI1xuICAgICAgICBpbmRleGVzLmFkZCBpZHhfMlxuICAgICAgUi5zZXQgY2FuZGlkYXRlLCBbIGluZGV4ZXMuLi4sIF0gaWYgaW5kZXhlcy5zaXplID4gMVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcmV0dXJuIFJcblxuICAjICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBhc190ZXh0ID0gKCByZXBjcyApIC0+ICggXFxcbiAgIyAgIFwiI3tKU09OLnN0cmluZ2lmeSBzZXF1ZW5jZX06I3tKU09OLnN0cmluZ2lmeSBpbmRpY2VzfVwiIGZvciBbIHNlcXVlbmNlLCBpbmRpY2VzLCBdIGZyb20gcmVwY3MgKS5qb2luICcsJ1xuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFzX3RleHQgPSAoIHJlcGNzICkgLT4gSlNPTi5zdHJpbmdpZnkgT2JqZWN0LmZyb21FbnRyaWVzIHJlcGNzXG5cbiAgIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICByZXR1cm4ge1xuICAgIGlzX3B1cmVseV9yZXBldGl0aXZlLFxuICAgIGZpbmRfYWxsX3JlcGV0aXRpb25zLFxuICAgIGludGVybmFsczoge1xuICAgICAgcmVwZWF0ZWRfY2hyc19yZSxcbiAgICAgIGlzX3Nob3J0ZXJfdGhhbl90d29fY2hycyxcbiAgICAgIGZpbmRfcmVkdXBsaWNhdGlvbl9jYW5kaWRhdGVzLFxuICAgICAgYXNfdGV4dCxcbiAgICAgIH0sIH1cblxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkB0ZXN0cyA9IHRlc3RzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGludGVyZmFjZTogLT5cbiAgICBGUkVQID0gcmVxdWlyZV9maW5kX3JlcGV0aXRpb25zKClcbiAgICBAZXEgKCDOqWNybW1kX19fNyA9IC0+IHR5cGVfb2YgRlJFUC5pc19wdXJlbHlfcmVwZXRpdGl2ZSAgICAgICAgICAgICAgICAgICAgICksICdmdW5jdGlvbidcbiAgICBAZXEgKCDOqWNybW1kX19fOCA9IC0+IHR5cGVfb2YgRlJFUC5pbnRlcm5hbHMuZmluZF9yZWR1cGxpY2F0aW9uX2NhbmRpZGF0ZXMgICksICdmdW5jdGlvbidcbiAgICBAZXEgKCDOqWNybW1kX19fOSA9IC0+IHR5cGVfb2YgRlJFUC5maW5kX2FsbF9yZXBldGl0aW9ucyAgICAgICAgICAgICAgICAgICAgICksICdmdW5jdGlvbidcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc19zaG9ydGVyX3RoYW5fdHdvX2NocnM6IC0+XG4gICAgeyBpbnRlcm5hbHMsIH0gPSByZXF1aXJlX2ZpbmRfcmVwZXRpdGlvbnMoKVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgQGVxICggzqljcm1tZF9fMTAgPSAtPiBpbnRlcm5hbHMuaXNfc2hvcnRlcl90aGFuX3R3b19jaHJzICcnICAgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqljcm1tZF9fMTEgPSAtPiBpbnRlcm5hbHMuaXNfc2hvcnRlcl90aGFuX3R3b19jaHJzICdhJyAgICAgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pY3JtbWRfXzEyID0gLT4gaW50ZXJuYWxzLmlzX3Nob3J0ZXJfdGhhbl90d29fY2hycyAnYWEnICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6pY3JtbWRfXzEzID0gLT4gaW50ZXJuYWxzLmlzX3Nob3J0ZXJfdGhhbl90d29fY2hycyAnYWFhJyAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWNybW1kX18xNCA9IC0+IGludGVybmFscy5pc19zaG9ydGVyX3RoYW5fdHdvX2NocnMgJ/CqnIUnICAgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqljcm1tZF9fMTUgPSAtPiBpbnRlcm5hbHMuaXNfc2hvcnRlcl90aGFuX3R3b19jaHJzICfwqpyFYScgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqljcm1tZF9fMTYgPSAtPiBpbnRlcm5hbHMuaXNfc2hvcnRlcl90aGFuX3R3b19jaHJzICfwqpyFYWEnICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6pY3JtbWRfXzE3ID0gLT4gaW50ZXJuYWxzLmlzX3Nob3J0ZXJfdGhhbl90d29fY2hycyAnYfCqnIUnICAgICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6pY3JtbWRfXzE4ID0gLT4gaW50ZXJuYWxzLmlzX3Nob3J0ZXJfdGhhbl90d29fY2hycyAnYWHwqpyFJyAgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWNybW1kX18xOSA9IC0+IGludGVybmFscy5pc19zaG9ydGVyX3RoYW5fdHdvX2NocnMgJ/CqnIXwqpyFJyAgICAgICAgICAgKSwgZmFsc2VcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc19wdXJlbHlfcmVwZXRpdGl2ZTogLT5cbiAgICB7IGlzX3B1cmVseV9yZXBldGl0aXZlLCB9ID0gcmVxdWlyZV9maW5kX3JlcGV0aXRpb25zKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIEBlcSAoIM6pY3JtbWRfXzIwID0gLT4gaXNfcHVyZWx5X3JlcGV0aXRpdmUgJycgICAgICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqljcm1tZF9fMjEgPSAtPiBpc19wdXJlbHlfcmVwZXRpdGl2ZSAnYScgICAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWNybW1kX18yMiA9IC0+IGlzX3B1cmVseV9yZXBldGl0aXZlICdhYmMnICAgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6pY3JtbWRfXzIzID0gLT4gaXNfcHVyZWx5X3JlcGV0aXRpdmUgJ2FhYWMnICAgICAgICksIGZhbHNlXG4gICAgQGVxICggzqljcm1tZF9fMjQgPSAtPiBpc19wdXJlbHlfcmVwZXRpdGl2ZSAnYWJjYScgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWNybW1kX18yNSA9IC0+IGlzX3B1cmVseV9yZXBldGl0aXZlICdhYScgICAgICAgICApLCB0cnVlXG4gICAgQGVxICggzqljcm1tZF9fMjYgPSAtPiBpc19wdXJlbHlfcmVwZXRpdGl2ZSAnYWFhJyAgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pY3JtbWRfXzI3ID0gLT4gaXNfcHVyZWx5X3JlcGV0aXRpdmUgJ2FiY2FiYycgICAgICksIHRydWVcbiAgICBAZXEgKCDOqWNybW1kX18yOCA9IC0+IGlzX3B1cmVseV9yZXBldGl0aXZlICfwqpyAJyAgICAgICAgKSwgZmFsc2VcbiAgICBAZXEgKCDOqWNybW1kX18yOSA9IC0+IGlzX3B1cmVseV9yZXBldGl0aXZlICfwqpyA8KqcgCcgICAgICAgKSwgdHJ1ZVxuICAgIEBlcSAoIM6pY3JtbWRfXzMwID0gLT4gaXNfcHVyZWx5X3JlcGV0aXRpdmUgJ2HwqpyA8KqcgCcgICAgICApLCBmYWxzZVxuICAgIEBlcSAoIM6pY3JtbWRfXzMxID0gLT4gaXNfcHVyZWx5X3JlcGV0aXRpdmUgJ2HwqpyAYfCqnIAnICAgICApLCB0cnVlXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICA7bnVsbFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZmluZF9yZWR1cGxpY2F0aW9uX2NhbmRpZGF0ZXM6IC0+XG4gICAgeyBpbnRlcm5hbHMsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICB9ID0gcmVxdWlyZV9maW5kX3JlcGV0aXRpb25zKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICBbICcnLCAne30nIF1cbiAgICAgIFsgJ2EnLCAne30nIF1cbiAgICAgIFsgJ2FhJywgJ3tcImFcIjowfScgXVxuICAgICAgWyAnYWJjJywgJ3t9JyBdXG4gICAgICBbICdhYmNhJywgJ3tcImFcIjowLFwiYWJcIjowfScgXVxuICAgICAgWyAnYWJjYWInLCAne1wiYVwiOjAsXCJhYlwiOjAsXCJiXCI6MSxcImJjXCI6MX0nIF1cbiAgICAgIFsgJ2FiY2FiYycsICd7XCJhXCI6MCxcImFiXCI6MCxcImFiY1wiOjAsXCJiXCI6MSxcImJjXCI6MSxcImNcIjoyLFwiY2FcIjoyfScgXVxuICAgICAgWyAn8KqchfCqnIUnLCAne1wi8KqchVwiOjB9JyBdXG4gICAgICBbICdwcm9ncmFtbWllcnVuZycsICd7XCJyXCI6MSxcInJvXCI6MSxcInJvZ1wiOjEsXCJyb2dyXCI6MSxcInJvZ3JhXCI6MSxcInJvZ3JhbVwiOjEsXCJnXCI6MyxcImdyXCI6MyxcImdyYVwiOjMsXCJncmFtXCI6MyxcImdyYW1tXCI6MyxcInJhXCI6NCxcInJhbVwiOjQsXCJyYW1tXCI6NCxcInJhbW1pXCI6NCxcIm1cIjo2LFwibW1pXCI6NixcIm1taWVcIjo2LFwibWlcIjo3LFwibWllXCI6NyxcInJ1XCI6MTB9JyBdXG4gICAgICBbICd4eGFhYWFiYmJiY2NjY3h4JywgJ3tcInhcIjowLFwieHhhXCI6MCxcInh4YWFcIjowLFwieHhhYWFcIjowLFwieHhhYWFhXCI6MCxcInh4YWFhYWJcIjowLFwieHhhYWFhYmJcIjowLFwieGFcIjoxLFwieGFhXCI6MSxcInhhYWFcIjoxLFwieGFhYWFcIjoxLFwieGFhYWFiXCI6MSxcInhhYWFhYmJcIjoxLFwiYVwiOjIsXCJhYWFhYlwiOjIsXCJhYWFhYmJcIjoyLFwiYWFhYWJiYlwiOjIsXCJhYWFiXCI6MyxcImFhYWJiXCI6MyxcImFhYWJiYlwiOjMsXCJhYWJcIjo0LFwiYWFiYlwiOjQsXCJhYWJiYlwiOjQsXCJhYWJiYmJcIjo0LFwiYWJcIjo1LFwiYWJiXCI6NSxcImFiYmJcIjo1LFwiYWJiYmJcIjo1LFwiYlwiOjYsXCJiYmJiY1wiOjYsXCJiYmJjXCI6NyxcImJiY1wiOjgsXCJiYmNjXCI6OCxcImJjXCI6OSxcImJjY1wiOjksXCJjXCI6MTB9JyBdXG4gICAgICBbICd4eGFiY2FiY2FiY2FiY3h4JywgJ3tcInhcIjowLFwieHhhXCI6MCxcInh4YWJcIjowLFwieHhhYmNcIjowLFwieHhhYmNhXCI6MCxcInh4YWJjYWJcIjowLFwieHhhYmNhYmNcIjowLFwieGFcIjoxLFwieGFiXCI6MSxcInhhYmNcIjoxLFwieGFiY2FcIjoxLFwieGFiY2FiXCI6MSxcInhhYmNhYmNcIjoxLFwiYVwiOjIsXCJhYlwiOjIsXCJhYmNcIjoyLFwiYWJjYVwiOjIsXCJhYmNhYlwiOjIsXCJhYmNhYmNhXCI6MixcImJcIjozLFwiYmNcIjozLFwiYmNhXCI6MyxcImJjYWJcIjozLFwiYmNhYmNcIjozLFwiY1wiOjQsXCJjYVwiOjQsXCJjYWJcIjo0LFwiY2FiY1wiOjQsXCJjYWJjYVwiOjR9JyBdXG4gICAgICBbICd4MGFiY2FiY2FiY2FiY3gwJywgJ3tcIjBcIjoxLFwieFwiOjAsXCJ4MFwiOjAsXCJ4MGFcIjowLFwieDBhYlwiOjAsXCJ4MGFiY1wiOjAsXCJ4MGFiY2FcIjowLFwieDBhYmNhYlwiOjAsXCJ4MGFiY2FiY1wiOjAsXCIwYVwiOjEsXCIwYWJcIjoxLFwiMGFiY1wiOjEsXCIwYWJjYVwiOjEsXCIwYWJjYWJcIjoxLFwiMGFiY2FiY1wiOjEsXCJhXCI6MixcImFiXCI6MixcImFiY1wiOjIsXCJhYmNhXCI6MixcImFiY2FiXCI6MixcImFiY2FiY2FcIjoyLFwiYlwiOjMsXCJiY1wiOjMsXCJiY2FcIjozLFwiYmNhYlwiOjMsXCJiY2FiY1wiOjMsXCJjXCI6NCxcImNhXCI6NCxcImNhYlwiOjQsXCJjYWJjXCI6NCxcImNhYmNhXCI6NH0nIF1cbiAgICAgIFsgJ2RmcHFyc3RkZicsICd7XCJkXCI6MCxcImRmXCI6MCxcImRmcFwiOjAsXCJkZnBxXCI6MCxcImZcIjoxLFwiZnBcIjoxLFwiZnBxXCI6MSxcImZwcXJcIjoxfScgXVxuICAgICAgWyAnZGZwcWRzdGRmJywgJ3tcImRcIjowLFwiZGZcIjowLFwiZGZwXCI6MCxcImRmcHFcIjowLFwiZlwiOjEsXCJmcFwiOjEsXCJmcHFcIjoxLFwiZnBxZFwiOjEsXCJkc1wiOjR9JyBdXG4gICAgICBbICflhoLkuInkuInkuInkuInkuIXkuIXkuIXkuIUnLCAne1wi5LiJXCI6MSxcIuS4ieS4ieS4hVwiOjMsXCLkuInkuIVcIjo0LFwi5LiFXCI6NX0nIF1cbiAgICAgIFsgJ+K7l+eVjOeVjCcsICd7XCLnlYxcIjoxfScgXVxuICAgICAgWyAn5Y+j5Y+j5Y+j5Y+j54qsJywgJ3tcIuWPo1wiOjB9JyBdXG4gICAgICBbICfwqpyA8KqcgPCqnIDwqpyA54qsJywgJ3tcIvCqnIBcIjowLFwi8KqcgOeKrFwiOjN9JyBdXG4gICAgICBbICflj6Plj6Pniqzlj6Plj6MnLCAne1wi5Y+jXCI6MCxcIuWPo+eKrFwiOjF9JyBdXG4gICAgICBbICflj6Pniqzlj6Pniqzlj6MnLCAne1wi5Y+jXCI6MCxcIuWPo+eKrFwiOjAsXCLniqxcIjoxLFwi54qs5Y+jXCI6MX0nIF1cbiAgICAgIFsgJ/CqnIDniqzwqpyA54qs8KqcgCcsICd7XCLwqpyAXCI6MCxcIvCqnIDniqxcIjowLFwi54qsXCI6MSxcIueKrPCqnIBcIjoxfScgXVxuICAgICAgWyAn45eK54qsJywgJ3t9JyBdXG4gICAgICBbICflk63lkIUnLCAne30nIF1cbiAgICAgIFsgJ+WQleWQlScsICd7XCLlkJVcIjowfScgXVxuICAgICAgWyAn5ZCF5ZCFJywgJ3tcIuWQhVwiOjB9JyBdXG4gICAgICBbICflj6Plj6MnLCAne1wi5Y+jXCI6MH0nIF1cbiAgICAgIFsgJ+WPo+WPoycsICd7XCLlj6NcIjowfScgXVxuICAgICAgXVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZm9yIFsgcHJvYmUsIG1hdGNoZXIsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgcmVzdWx0ICA9IGludGVybmFscy5maW5kX3JlZHVwbGljYXRpb25fY2FuZGlkYXRlcyBwcm9iZVxuICAgICAgcmVzdWx0ICA9IGludGVybmFscy5hc190ZXh0IHJlc3VsdFxuICAgICAgIyBlY2hvIFsgcHJvYmUsIHJlc3VsdCwgXVxuICAgICAgQGVxICggzqljcm1tZF9fMzIgPSAtPiByZXN1bHQgKSwgbWF0Y2hlclxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgO251bGxcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGZpbmRfYWxsX3JlcGV0aXRpb25zOiAtPlxuICAgIHsgZmluZF9hbGxfcmVwZXRpdGlvbnMsXG4gICAgICBpbnRlcm5hbHMsICAgICAgICAgICAgICB9ID0gcmVxdWlyZV9maW5kX3JlcGV0aXRpb25zKClcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHByb2Jlc19hbmRfbWF0Y2hlcnMgPSBbXG4gICAgICBbICcnLCAne30nIF1cbiAgICAgIFsgJ2EnLCAne30nIF1cbiAgICAgIFsgJ2FhJywgJ3tcImFcIjpbMCwxXX0nIF1cbiAgICAgIFsgJ/CqnIXwqpyFJywgJ3tcIvCqnIVcIjpbMCwyXX0nIF1cbiAgICAgIFsgJ3Byb2dyYW1taWVydW5nJywgJ3tcInJcIjpbMSw0LDEwXSxcImdcIjpbMywxM10sXCJtXCI6WzYsN119JyBdXG4gICAgICBbICd4eGFhYWFiYmJiY2NjY3h4JywgJ3tcInhcIjpbMCwxLDE0LDE1XSxcImFcIjpbMiwzLDQsNV0sXCJiXCI6WzYsNyw4LDldLFwiY1wiOlsxMCwxMSwxMiwxM119JyBdXG4gICAgICBbICd4eGFiY2FiY2FiY2FiY3h4JywgJ3tcInhcIjpbMCwxLDE0LDE1XSxcImFcIjpbMiw1LDgsMTFdLFwiYWJcIjpbMiw1LDgsMTFdLFwiYWJjXCI6WzIsNSw4LDExXSxcImFiY2FcIjpbMiw4XSxcImFiY2FiXCI6WzIsOF0sXCJiXCI6WzMsNiw5LDEyXSxcImJjXCI6WzMsNiw5LDEyXSxcImJjYVwiOlszLDYsOV0sXCJiY2FiXCI6WzMsOV0sXCJiY2FiY1wiOlszLDldLFwiY1wiOls0LDcsMTAsMTNdLFwiY2FcIjpbNCw3LDEwXSxcImNhYlwiOls0LDcsMTBdLFwiY2FiY1wiOls0LDEwXX0nIF1cbiAgICAgIFsgJ3gwYWJjYWJjYWJjYWJjeDAnLCAne1wiMFwiOlsxLDE1XSxcInhcIjpbMCwxNF0sXCJ4MFwiOlswLDE0XSxcImFcIjpbMiw1LDgsMTFdLFwiYWJcIjpbMiw1LDgsMTFdLFwiYWJjXCI6WzIsNSw4LDExXSxcImFiY2FcIjpbMiw4XSxcImFiY2FiXCI6WzIsOF0sXCJiXCI6WzMsNiw5LDEyXSxcImJjXCI6WzMsNiw5LDEyXSxcImJjYVwiOlszLDYsOV0sXCJiY2FiXCI6WzMsOV0sXCJiY2FiY1wiOlszLDldLFwiY1wiOls0LDcsMTAsMTNdLFwiY2FcIjpbNCw3LDEwXSxcImNhYlwiOls0LDcsMTBdLFwiY2FiY1wiOls0LDEwXX0nIF1cbiAgICAgIFsgJ2RmcHFyc3RkZicsICd7XCJkXCI6WzAsN10sXCJkZlwiOlswLDddLFwiZlwiOlsxLDhdfScgXVxuICAgICAgWyAnZGZwcWRzdGRmJywgJ3tcImRcIjpbMCw0LDddLFwiZGZcIjpbMCw3XSxcImZcIjpbMSw4XX0nIF1cbiAgICAgIFsgJ+WGguS4ieS4ieS4ieS4ieS4heS4heS4heS4hScsICd7XCLkuIlcIjpbMSwyLDMsNF0sXCLkuIVcIjpbNSw2LDcsOF19JyBdXG4gICAgICBbICfiu5fnlYznlYwnLCAne1wi55WMXCI6WzEsMl19JyBdXG4gICAgICBbICflj6Plj6Plj6Plj6PniqwnLCAne1wi5Y+jXCI6WzAsMSwyLDNdfScgXVxuICAgICAgWyAn8KqcgPCqnIDwqpyA8KqcgOeKrCcsICd7XCLwqpyAXCI6WzAsMiw0LDZdLFwi8KqcgOeKrFwiOlszLDZdfScgXVxuICAgICAgWyAn5Y+j5Y+j54qs5Y+j5Y+jJywgJ3tcIuWPo1wiOlswLDEsMyw0XX0nIF1cbiAgICAgIFsgJ+WPo+eKrOWPo+eKrOWPoycsICd7XCLlj6NcIjpbMCwyLDRdLFwi5Y+j54qsXCI6WzAsMl0sXCLniqxcIjpbMSwzXSxcIueKrOWPo1wiOlsxLDNdfScgXVxuICAgICAgWyAn8KqcgOeKrPCqnIDniqzwqpyAJywgJ3tcIvCqnIBcIjpbMCwzLDZdLFwi8KqcgOeKrFwiOlswLDNdLFwi54qsXCI6WzEsMiw1XSxcIueKrPCqnIBcIjpbMSw1XX0nIF1cbiAgICAgIFsgJ+OXiueKrCcsICd7fScgXVxuICAgICAgWyAn5ZOt5ZCFJywgJ3t9JyBdXG4gICAgICBbICflkJXlkJUnLCAne1wi5ZCVXCI6WzAsMV19JyBdXG4gICAgICBbICflkIXlkIUnLCAne1wi5ZCFXCI6WzAsMV19JyBdXG4gICAgICBbICflj6Plj6MnLCAne1wi5Y+jXCI6WzAsMV19JyBdXG4gICAgICBbICflj6Plj6MnLCAne1wi5Y+jXCI6WzAsMV19JyBdXG4gICAgICBbICdhYmFjYWRhZWZnaHhhcnlhcnphcicsICd7XCJhXCI6WzAsMiw0LDYsMTIsMTUsMThdLFwiYXJcIjpbMTIsMTUsMThdLFwiclwiOlsxMywxNiwxOV19JyBdXG4gICAgICBdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBmb3IgWyBwcm9iZSwgbWF0Y2hlciwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICByZXN1bHQgID0gZmluZF9hbGxfcmVwZXRpdGlvbnMgcHJvYmVcbiAgICAgIHJlc3VsdCAgPSBpbnRlcm5hbHMuYXNfdGV4dCByZXN1bHRcbiAgICAgICMgZWNobyBbIHByb2JlLCByZXN1bHQsIF1cbiAgICAgIEBlcSAoIM6pY3JtbWRfXzMzID0gLT4gcmVzdWx0ICksIG1hdGNoZXJcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIDtudWxsXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgbW9kdWxlIGlzIHJlcXVpcmUubWFpbiB0aGVuIGF3YWl0IGRvID0+XG4gICMgZGVtb19pbmZpbml0ZV9wcm94eSgpXG4gICMgZGVtb19jb2xvcmZ1bF9wcm94eSgpXG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogZmFsc2UsICBzaG93X3Bhc3NlczogZmFsc2UsIHJlcG9ydF9jaGVja3M6IGZhbHNlLCB9XG4gIGd1eXRlc3RfY2ZnID0geyB0aHJvd19vbl9lcnJvcjogdHJ1ZSwgICBzaG93X3Bhc3NlczogdHJ1ZSwgcmVwb3J0X2NoZWNrczogdHJ1ZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IHRlc3RzLCB9XG4gICMgKCBuZXcgVGVzdCBndXl0ZXN0X2NmZyApLnRlc3QgeyBmaW5kX3JlZHVwbGljYXRpb25fY2FuZGlkYXRlczogdGVzdHMuZmluZF9yZWR1cGxpY2F0aW9uX2NhbmRpZGF0ZXMsIH1cbiAgO251bGxcbiJdfQ==
