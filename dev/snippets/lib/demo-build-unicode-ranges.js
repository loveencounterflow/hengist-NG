(async function() {
  'use strict';
  var FS, GTNG, GUY, PATH, SFMODULES, SQL, SQLITE, Test, Unicode_range, Unicode_ranges, alert, blue, bold, codepoint_patterns, debug, demo_build_unicode_ranges, echo, env_paths, f, get_rough_unicode_category, gold, green, grey, help, hide, info, inspect, lime, log, mkdirp, nfa, on_process_exit, plain, praise, red, reverse, rpr, rpr_cid, set_getter, timeit, urge, warn, whisper, white;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-build-unicode-ranges'));

  ({rpr, inspect, echo, white, green, lime, blue, gold, grey, red, bold, reverse, log} = GUY.trm);

  ({f} = require('../../../apps/effstring'));

  // write                     = ( p ) -> process.stdout.write p
  ({nfa} = require('../../../apps/normalize-function-arguments'));

  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

  mkdirp = require('mkdirp');

  env_paths = (require('env-paths')).default('demo-node-sqlite');

  SQLITE = require('node:sqlite');

  PATH = require('node:path');

  ({SQL} = require('../../../apps/dbay'));

  ({
    default: on_process_exit
  } = require('exit-hook'));

  FS = require('node:fs');

  ({hide, set_getter} = SFMODULES.require_managed_property_tools());

  ({timeit} = SFMODULES.unstable.require_benchmarking());

  //===========================================================================================================
  rpr_cid = function(cid) {
    if (!Number.isFinite(cid)) {
      return rpr(cid);
    }
    return '0x' + ((cid.toString(16)).padStart(4, '0')).toLowerCase();
  };

  //===========================================================================================================
  codepoint_patterns = {
    unassigned: /^\p{Cn}$/v, // Control
    control: /^\p{C}$/v, // Control
    letter: /^\p{L}$/v,
    space: /^\p{Zs}$/v,
    separator: /^\p{Z}$/v,
    mark: /^\p{M}$/v
  };

  // surrogate:  ///^\p{C}$///v # Surrogate

  //-----------------------------------------------------------------------------------------------------------
  get_rough_unicode_category = function(chr) {
    var name, pattern;
    for (name in codepoint_patterns) {
      pattern = codepoint_patterns[name];
      if (pattern.test(chr)) {
        return name;
      }
    }
    return 'other';
  };

  Unicode_range = (function() {
    //===========================================================================================================
    class Unicode_range {
      //---------------------------------------------------------------------------------------------------------
      constructor({is_member = true, lo = 0x0000, hi = null}) {
        this.is_member = is_member;
        this.lo = lo;
        this.hi = hi != null ? hi : lo;
        return void 0;
      }

      //---------------------------------------------------------------------------------------------------------
      increment_hi() {
        return this.hi++;
      }

      decrement_lo() {
        return this.lo--;
      }

      //---------------------------------------------------------------------------------------------------------
      has(cid) {
        return (this.lo <= cid && cid <= this.hi);
      }

      toString() {
        return `[ U+${rpr_cid(this.lo)} .. U+${rpr_cid(this.hi)} ]`;
      }

    };

    //---------------------------------------------------------------------------------------------------------
    set_getter(Unicode_range.prototype, Symbol.toStringTag, function() {
      return `[ U+${rpr_cid(this.lo)} .. U+${rpr_cid(this.hi)} ]`;
    });

    return Unicode_range;

  }).call(this);

  Unicode_ranges = (function() {
    //===========================================================================================================
    class Unicode_ranges {
      //---------------------------------------------------------------------------------------------------------
      constructor() {
        this.ranges = [];
        return void 0;
      }

      //---------------------------------------------------------------------------------------------------------
      * [Symbol.iterator]() {
        return (yield* this.ranges);
      }

      //---------------------------------------------------------------------------------------------------------
      test_codepoint(cid) {
        var chr;
        return !codepoint_patterns.unassigned.test((chr = String.fromCodePoint(cid)));
      }

      //---------------------------------------------------------------------------------------------------------
      add_range(range) {
        throw new Error("Ω___2 not implemented");
      }

      //---------------------------------------------------------------------------------------------------------
      has(cid) {
        var i, len, range, ref;
        ref = this.ranges;
        for (i = 0, len = ref.length; i < len; i++) {
          range = ref[i];
          if (range.has(cid)) {
            return true;
          }
        }
        return false;
      }

      //---------------------------------------------------------------------------------------------------------
      add_consecutive_codepoint(cid) {
        /* TAINT validate */
        var is_member;
        is_member = this.test_codepoint(cid);
        if (this.is_empty) {
          this.ranges.push(new Unicode_range({
            is_member,
            lo: cid
          }));
        }
        // debug 'Ω___3', ( rpr_cid cid ), ( rpr_cid @next_cid )
        // return null if @has cid
        // debug 'Ω___4', ( rpr_cid @next_cid ), ( rpr_cid cid ), ( @has cid )
        // debug 'Ω___5', "#{range}" for range in @ranges
        // unless cid is @next_cid
        //   throw new Error "Ω___6 expected #{rpr_cid @next_cid}, got #{rpr_cid cid}"
        if (is_member === this.current_range.is_member) {
          this.current_range.hi = cid;
        } else {
          this.ranges.push(new Unicode_range({
            is_member,
            lo: cid
          }));
        }
        return null;
      }

    };

    //---------------------------------------------------------------------------------------------------------
    set_getter(Unicode_ranges.prototype, 'current_range', function() {
      var ref;
      return (ref = this.ranges.at(-1)) != null ? ref : null;
    });

    set_getter(Unicode_ranges.prototype, 'is_empty', function() {
      return this.ranges.length === 0;
    });

    //---------------------------------------------------------------------------------------------------------
    set_getter(Unicode_ranges.prototype, 'next_cid', function() {
      if (this.is_empty) {
        throw new Error("Ω___1 unable to get next CID when collection is empty");
      }
      return this.current_range.hi + 1;
    });

    return Unicode_ranges;

  }).call(this);

  //===========================================================================================================
  demo_build_unicode_ranges = () => {
    var My_unicode_ranges, chr_re, collect_ranges, hi, lo, range, ranges;
    lo = 0x0000;
    // hi  = 0x0380
    // lo  = 0x0390
    // hi  = 0x03ff
    // hi  = 0x10ffff
    hi = 0x00ff;
    // hi  = 0xffff
    //.........................................................................................................
    // crt_start           = lo
    // crt_range           = null
    // prv_is_unassigned   = false
    // assigned_ranges     = []
    // unassigned_ranges   = []
    //.........................................................................................................
    chr_re = /^(?:\p{L}|\p{Zs}|\p{Z}|\p{M}|\p{N}|\p{P}|\p{S})$/v;
    My_unicode_ranges = class My_unicode_ranges extends Unicode_ranges {
      //---------------------------------------------------------------------------------------------------------
      test_codepoint(cid) {
        var chr;
        return chr_re.test((chr = String.fromCodePoint(cid)));
      }

    };
    //.........................................................................................................
    // ranges              = new Unicode_ranges()
    ranges = new My_unicode_ranges();
    //.........................................................................................................
    timeit(collect_ranges = function() {
      var cid, i, ref, ref1;
      for (cid = i = ref = lo, ref1 = hi; i <= ref1; cid = i += +1) {
        // debug 'Ω___7', ( rpr_cid cid ), new Unicode_range { lo: cid, }
        ranges.add_consecutive_codepoint(cid);
      }
      return null;
    });
//.........................................................................................................
    for (range of ranges.ranges.slice(0, 21)) {
      info('Ω___8', (range.is_member ? gold : blue)(range));
    }
    debug('Ω___8', f`collected ${ranges.ranges.length}:>20,.0f; ranges for ${hi - lo + 1}:>20,.0f; codepoints`);
    //.........................................................................................................
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (async() => {
      await demo_build_unicode_ranges();
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlbW8tYnVpbGQtdW5pY29kZS1yYW5nZXMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQUE7QUFBQSxNQUFBLEVBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsR0FBQSxFQUFBLE1BQUEsRUFBQSxJQUFBLEVBQUEsYUFBQSxFQUFBLGNBQUEsRUFBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxrQkFBQSxFQUFBLEtBQUEsRUFBQSx5QkFBQSxFQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsQ0FBQSxFQUFBLDBCQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxlQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxLQUFBOzs7RUFHQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLDJCQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLEtBSkYsRUFLRSxJQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxJQVJGLEVBU0UsR0FURixFQVVFLElBVkYsRUFXRSxPQVhGLEVBWUUs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PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnZGVtby1idWlsZC11bmljb2RlLXJhbmdlcydcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICBncmVlblxuICBsaW1lXG4gIGJsdWVcbiAgZ29sZFxuICBncmV5XG4gIHJlZFxuICBib2xkXG4gIHJldmVyc2VcbiAgbG9nICAgICB9ICAgICAgICAgICAgICAgPSBHVVkudHJtXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG4jIHdyaXRlICAgICAgICAgICAgICAgICAgICAgPSAoIHAgKSAtPiBwcm9jZXNzLnN0ZG91dC53cml0ZSBwXG57IG5mYSB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ub3JtYWxpemUtZnVuY3Rpb24tYXJndW1lbnRzJ1xuR1RORyAgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvZ3V5LXRlc3QtTkcnXG57IFRlc3QgICAgICAgICAgICAgICAgICB9ID0gR1ROR1xuU0ZNT0RVTEVTICAgICAgICAgICAgICAgICA9IHJlcXVpcmUgJy4uLy4uLy4uL2FwcHMvYnJpY2FicmFjLXNmbW9kdWxlcydcbm1rZGlycCAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdta2RpcnAnXG5lbnZfcGF0aHMgICAgICAgICAgICAgICAgID0gKCByZXF1aXJlICdlbnYtcGF0aHMnICkuZGVmYXVsdCAnZGVtby1ub2RlLXNxbGl0ZSdcblNRTElURSAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnNxbGl0ZSdcblBBVEggICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOnBhdGgnXG57IFNRTCB9ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9kYmF5J1xueyBkZWZhdWx0OiBcXFxuICBvbl9wcm9jZXNzX2V4aXQsICAgICAgfSA9IHJlcXVpcmUgJ2V4aXQtaG9vaydcbkZTICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdub2RlOmZzJ1xueyBoaWRlLFxuICBzZXRfZ2V0dGVyLCAgICAgICAgICAgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX21hbmFnZWRfcHJvcGVydHlfdG9vbHMoKVxueyB0aW1laXQsICAgICAgICAgICAgICAgfSA9IFNGTU9EVUxFUy51bnN0YWJsZS5yZXF1aXJlX2JlbmNobWFya2luZygpXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5ycHJfY2lkID0gKCBjaWQgKSAtPlxuICByZXR1cm4gcnByIGNpZCB1bmxlc3MgTnVtYmVyLmlzRmluaXRlIGNpZFxuICByZXR1cm4gJzB4JyArICggKCBjaWQudG9TdHJpbmcgMTYgKS5wYWRTdGFydCA0LCAnMCcgKS50b0xvd2VyQ2FzZSgpXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29kZXBvaW50X3BhdHRlcm5zID1cbiAgdW5hc3NpZ25lZDogLy8vXlxccHtDbn0kLy8vdiAjIENvbnRyb2xcbiAgY29udHJvbDogICAgLy8vXlxccHtDfSQvLy92ICMgQ29udHJvbFxuICBsZXR0ZXI6ICAgICAvLy9eXFxwe0x9JC8vL3ZcbiAgc3BhY2U6ICAgICAgLy8vXlxccHtac30kLy8vdlxuICBzZXBhcmF0b3I6ICAvLy9eXFxwe1p9JC8vL3ZcbiAgbWFyazogICAgICAgLy8vXlxccHtNfSQvLy92XG4gICMgc3Vycm9nYXRlOiAgLy8vXlxccHtDfSQvLy92ICMgU3Vycm9nYXRlXG5cbiMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZ2V0X3JvdWdoX3VuaWNvZGVfY2F0ZWdvcnkgPSAoIGNociApIC0+XG4gIGZvciBuYW1lLCBwYXR0ZXJuIG9mIGNvZGVwb2ludF9wYXR0ZXJuc1xuICAgIHJldHVybiBuYW1lIGlmIHBhdHRlcm4udGVzdCBjaHJcbiAgcmV0dXJuICdvdGhlcidcblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jbGFzcyBVbmljb2RlX3JhbmdlXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdHJ1Y3RvcjogKHsgaXNfbWVtYmVyID0gdHJ1ZSwgbG8gPSAweDAwMDAsIGhpID0gbnVsbCwgfSkgLT5cbiAgICBAaXNfbWVtYmVyICA9IGlzX21lbWJlclxuICAgIEBsbyAgICAgICAgID0gICAgICAgbG9cbiAgICBAaGkgICAgICAgICA9IGhpID8gIGxvXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuXG4gICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaW5jcmVtZW50X2hpOiAtPiBAaGkrK1xuICBkZWNyZW1lbnRfbG86IC0+IEBsby0tXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBoYXM6ICggY2lkICkgLT4gQGxvIDw9IGNpZCA8PSBAaGlcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldF9nZXR0ZXIgQDo6LCBTeW1ib2wudG9TdHJpbmdUYWcsIC0+IFwiWyBVKyN7cnByX2NpZCBAbG99IC4uIFUrI3tycHJfY2lkIEBoaX0gXVwiXG4gIHRvU3RyaW5nOiAgICAgICAgICAgICAgICAgICAgICAgICAgIC0+IFwiWyBVKyN7cnByX2NpZCBAbG99IC4uIFUrI3tycHJfY2lkIEBoaX0gXVwiXG5cbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY2xhc3MgVW5pY29kZV9yYW5nZXNcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIEByYW5nZXMgPSBbXVxuICAgIHJldHVybiB1bmRlZmluZWRcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFtTeW1ib2wuaXRlcmF0b3JdOiAtPiB5aWVsZCBmcm9tIEByYW5nZXNcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldF9nZXR0ZXIgQDo6LCAnY3VycmVudF9yYW5nZScsIC0+ICggQHJhbmdlcy5hdCAtMSApID8gbnVsbFxuICBzZXRfZ2V0dGVyIEA6OiwgJ2lzX2VtcHR5JywgICAgICAtPiBAcmFuZ2VzLmxlbmd0aCBpcyAwXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRfZ2V0dGVyIEA6OiwgJ25leHRfY2lkJywgLT5cbiAgICB0aHJvdyBuZXcgRXJyb3IgXCLOqV9fXzEgdW5hYmxlIHRvIGdldCBuZXh0IENJRCB3aGVuIGNvbGxlY3Rpb24gaXMgZW1wdHlcIiBpZiBAaXNfZW1wdHlcbiAgICByZXR1cm4gQGN1cnJlbnRfcmFuZ2UuaGkgKyAxXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB0ZXN0X2NvZGVwb2ludDogKCBjaWQgKSAtPiBub3QgY29kZXBvaW50X3BhdHRlcm5zLnVuYXNzaWduZWQudGVzdCAoIGNociA9IFN0cmluZy5mcm9tQ29kZVBvaW50IGNpZCApXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhZGRfcmFuZ2U6ICggcmFuZ2UgKSAtPiB0aHJvdyBuZXcgRXJyb3IgXCLOqV9fXzIgbm90IGltcGxlbWVudGVkXCJcblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGhhczogKCBjaWQgKSAtPlxuICAgIGZvciByYW5nZSBpbiBAcmFuZ2VzXG4gICAgICByZXR1cm4gdHJ1ZSBpZiByYW5nZS5oYXMgY2lkXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAgIy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhZGRfY29uc2VjdXRpdmVfY29kZXBvaW50OiAoIGNpZCApIC0+XG4gICAgIyMjIFRBSU5UIHZhbGlkYXRlICMjI1xuICAgIGlzX21lbWJlciA9IEB0ZXN0X2NvZGVwb2ludCBjaWRcbiAgICBpZiBAaXNfZW1wdHlcbiAgICAgIEByYW5nZXMucHVzaCAoIG5ldyBVbmljb2RlX3JhbmdlIHsgaXNfbWVtYmVyLCBsbzogY2lkLCB9IClcbiAgICAjIGRlYnVnICfOqV9fXzMnLCAoIHJwcl9jaWQgY2lkICksICggcnByX2NpZCBAbmV4dF9jaWQgKVxuICAgICMgcmV0dXJuIG51bGwgaWYgQGhhcyBjaWRcbiAgICAjIGRlYnVnICfOqV9fXzQnLCAoIHJwcl9jaWQgQG5leHRfY2lkICksICggcnByX2NpZCBjaWQgKSwgKCBAaGFzIGNpZCApXG4gICAgIyBkZWJ1ZyAnzqlfX181JywgXCIje3JhbmdlfVwiIGZvciByYW5nZSBpbiBAcmFuZ2VzXG4gICAgIyB1bmxlc3MgY2lkIGlzIEBuZXh0X2NpZFxuICAgICMgICB0aHJvdyBuZXcgRXJyb3IgXCLOqV9fXzYgZXhwZWN0ZWQgI3tycHJfY2lkIEBuZXh0X2NpZH0sIGdvdCAje3Jwcl9jaWQgY2lkfVwiXG4gICAgaWYgaXNfbWVtYmVyIGlzIEBjdXJyZW50X3JhbmdlLmlzX21lbWJlclxuICAgICAgQGN1cnJlbnRfcmFuZ2UuaGkgPSBjaWRcbiAgICBlbHNlXG4gICAgICBAcmFuZ2VzLnB1c2ggbmV3IFVuaWNvZGVfcmFuZ2UgeyBpc19tZW1iZXIsIGxvOiBjaWQsIH1cbiAgICByZXR1cm4gbnVsbFxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRlbW9fYnVpbGRfdW5pY29kZV9yYW5nZXMgPSA9PlxuICBsbyAgPSAweDAwMDBcbiAgIyBoaSAgPSAweDAzODBcbiAgIyBsbyAgPSAweDAzOTBcbiAgIyBoaSAgPSAweDAzZmZcbiAgIyBoaSAgPSAweDEwZmZmZlxuICBoaSAgPSAweDAwZmZcbiAgIyBoaSAgPSAweGZmZmZcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAjIGNydF9zdGFydCAgICAgICAgICAgPSBsb1xuICAjIGNydF9yYW5nZSAgICAgICAgICAgPSBudWxsXG4gICMgcHJ2X2lzX3VuYXNzaWduZWQgICA9IGZhbHNlXG4gICMgYXNzaWduZWRfcmFuZ2VzICAgICA9IFtdXG4gICMgdW5hc3NpZ25lZF9yYW5nZXMgICA9IFtdXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgY2hyX3JlID0gLy8vXig/OlxccHtMfXxcXHB7WnN9fFxccHtafXxcXHB7TX18XFxwe059fFxccHtQfXxcXHB7U30pJC8vL3ZcbiAgY2xhc3MgTXlfdW5pY29kZV9yYW5nZXMgZXh0ZW5kcyBVbmljb2RlX3Jhbmdlc1xuICAgICMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0ZXN0X2NvZGVwb2ludDogKCBjaWQgKSAtPiBjaHJfcmUudGVzdCAoIGNociA9IFN0cmluZy5mcm9tQ29kZVBvaW50IGNpZCApXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgIyByYW5nZXMgICAgICAgICAgICAgID0gbmV3IFVuaWNvZGVfcmFuZ2VzKClcbiAgcmFuZ2VzICAgICAgICAgICAgICA9IG5ldyBNeV91bmljb2RlX3JhbmdlcygpXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgdGltZWl0IGNvbGxlY3RfcmFuZ2VzID0gLT5cbiAgICBmb3IgY2lkIGluIFsgbG8gLi4gaGkgXSBieSArMVxuICAgICAgIyBkZWJ1ZyAnzqlfX183JywgKCBycHJfY2lkIGNpZCApLCBuZXcgVW5pY29kZV9yYW5nZSB7IGxvOiBjaWQsIH1cbiAgICAgIHJhbmdlcy5hZGRfY29uc2VjdXRpdmVfY29kZXBvaW50IGNpZFxuICAgIHJldHVybiBudWxsXG4gICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgZm9yIHJhbmdlIGZyb20gcmFuZ2VzLnJhbmdlc1sgMCAuLiAyMCBdXG4gICAgaW5mbyAnzqlfX184JywgKCBpZiByYW5nZS5pc19tZW1iZXIgdGhlbiBnb2xkIGVsc2UgYmx1ZSApIHJhbmdlXG4gIGRlYnVnICfOqV9fXzgnLCBmXCJjb2xsZWN0ZWQgI3tyYW5nZXMucmFuZ2VzLmxlbmd0aH06PjIwLC4wZjsgcmFuZ2VzIGZvciAje2hpIC0gbG8gKyAxfTo+MjAsLjBmOyBjb2RlcG9pbnRzXCJcbiAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICByZXR1cm4gbnVsbFxuXG4jPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIG1vZHVsZSBpcyByZXF1aXJlLm1haW4gdGhlbiBhd2FpdCBkbyA9PlxuICBhd2FpdCBkZW1vX2J1aWxkX3VuaWNvZGVfcmFuZ2VzKClcbiAgcmV0dXJuIG51bGxcbiJdfQ==
