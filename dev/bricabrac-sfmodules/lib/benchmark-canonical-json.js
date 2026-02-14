(async function() {
  'use strict';
  var C, GTNG, GUY, SFMODULES, Test, alert, debug, echo, f, help, info, inspect, log, plain, praise, reverse, rpr, urge, warn, whisper, white;

  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('bricabrac-benchmark-canonical-json'));

  ({rpr, inspect, echo, white, reverse, log} = GUY.trm);

  // WGUY                      = require '../../../apps/webguy'
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  ({f} = require('../../../apps/effstring'));

  SFMODULES = require('../../../apps/bricabrac-sfmodules');

  ({
    ansi_colors_and_effects: C
  } = SFMODULES.require_ansi_colors_and_effects());

  //###########################################################################################################

  //===========================================================================================================
  this.tasks = {
    //---------------------------------------------------------------------------------------------------------
    canonicize_json: function() {
      var Benchmarker, bigint_from_hrtime, bm, brand, canonicalize, error_counts, fast_stringify, hrtime_as_bigint, kanonicalize, probes_and_matchers, repetitions, sorted, stringify, total, type_of;
      ({bigint_from_hrtime, hrtime_as_bigint, Benchmarker} = SFMODULES.unstable.require_benchmarking());
      ({type_of} = SFMODULES.unstable.require_type_of());
      canonicalize = require('canonicalize');
      stringify = require('fast-json-stable-stringify');
      bm = new Benchmarker();
      brand = 'canojason';
      repetitions = 1e5;
      //.......................................................................................................
      probes_and_matchers = [
        [{},
        '{}'],
        [
          {
            from_account: '543 232 625-3',
            to_account: '321 567 636-4',
            amount: 500,
            currency: 'USD'
          },
          '{"amount":500,"currency":"USD","from_account":"543 232 625-3","to_account":"321 567 636-4"}'
        ],
        [
          [
            56,
            {
              '1': [],
              '10': null,
              d: true
            }
          ],
          '[56,{"1":[],"10":null,"d":true}]'
        ],
        [
          {
            peach: 'This sorting order',
            'péché': 'is wrong according to French',
            'pêche': 'but canonicalization MUST',
            sin: 'ignore locale'
          },
          '{"peach":"This sorting order","péché":"is wrong according to French","pêche":"but canonicalization MUST","sin":"ignore locale"}'
        ],
        [
          {
            '1': {
              f: {
                f: 'hi',
                F: 5
              },
              '\n': 56
            },
            '10': {},
            '111': [
              {
                e: 'yes',
                E: 'no'
              }
            ],
            '': 'empty',
            a: {},
            A: {
              b: '123'
            }
          },
          '{"":"empty","1":{"\\n":56,"f":{"F":5,"f":"hi"}},"10":{},"111":[{"E":"no","e":"yes"}],"A":{"b":"123"},"a":{}}'
        ],
        [
          {
            numbers: [333333333.3333333,
          1e+30,
          4.5,
          0.002,
          1e-27],
            string: `€$\x0F\nA'B"\\\\"/`,
            literals: [null,
          true,
          false]
          },
          `{"literals":[null,true,false],"numbers":[333333333.3333333,1e+30,4.5,0.002,1e-27],"string":"€$\\u000f\\nA'B\\"\\\\\\\\\\"/"}`
        ],
        [
          {
            '1': 'One',
            '€': 'Euro Sign',
            '\x80': 'Control',
            '😂': 'Smiley',
            'ö': 'Latin Small Letter O With Diaeresis',
            'דּ': 'Hebrew Letter Dalet With Dagesh',
            '</script>': 'Browser Challenge'
          },
          '{"1":"One","</script>":"Browser Challenge","\x80":"Control","ö":"Latin Small Letter O With Diaeresis","€":"Euro Sign","😂":"Smiley","דּ":"Hebrew Letter Dalet With Dagesh"}'
        ]
      ];
      //.......................................................................................................
      total = probes_and_matchers.length * repetitions;
      error_counts = [];
      //.......................................................................................................
      error_counts.push(bm.timeit({brand, total}, plain = function({progress}) {
        var error_count, i, j, len, matcher, nr, probe, ref, result;
        error_count = 0;
        for (nr = i = 1, ref = repetitions; (1 <= ref ? i <= ref : i >= ref); nr = 1 <= ref ? ++i : --i) {
          for (j = 0, len = probes_and_matchers.length; j < len; j++) {
            [probe, matcher] = probes_and_matchers[j];
            progress();
            result = JSON.stringify(probe);
            if ((nr === 1) && (result !== matcher)) {
              error_count++;
            }
          }
        }
        return error_count;
      }));
      //.......................................................................................................
      error_counts.push(bm.timeit({brand, total}, sorted = function({progress}) {
        var error_count, i, j, len, matcher, nr, probe, ref, result;
        error_count = 0;
        for (nr = i = 1, ref = repetitions; (1 <= ref ? i <= ref : i >= ref); nr = 1 <= ref ? ++i : --i) {
          for (j = 0, len = probes_and_matchers.length; j < len; j++) {
            [probe, matcher] = probes_and_matchers[j];
            progress();
            result = JSON.stringify(probe, (Object.keys(probe)).sort());
            if ((nr === 1) && (result !== matcher)) {
              error_count++;
            }
          }
        }
        return error_count;
      }));
      //.......................................................................................................
      error_counts.push(bm.timeit({brand, total}, kanonicalize = function({progress}) {
        var error_count, i, j, len, matcher, nr, probe, ref, result;
        error_count = 0;
        for (nr = i = 1, ref = repetitions; (1 <= ref ? i <= ref : i >= ref); nr = 1 <= ref ? ++i : --i) {
          for (j = 0, len = probes_and_matchers.length; j < len; j++) {
            [probe, matcher] = probes_and_matchers[j];
            progress();
            result = canonicalize(probe);
            if ((nr === 1) && (result !== matcher)) {
              error_count++;
            }
          }
        }
        // echo [ probe, result, ] if nr is 1
        return error_count;
      }));
      //.......................................................................................................
      error_counts.push(bm.timeit({brand, total}, fast_stringify = function({progress}) {
        var error_count, i, j, len, matcher, nr, probe, ref, result;
        error_count = 0;
        for (nr = i = 1, ref = repetitions; (1 <= ref ? i <= ref : i >= ref); nr = 1 <= ref ? ++i : --i) {
          for (j = 0, len = probes_and_matchers.length; j < len; j++) {
            [probe, matcher] = probes_and_matchers[j];
            progress();
            result = stringify(probe);
            if ((nr === 1) && (result !== matcher)) {
              error_count++;
            }
          }
        }
        // echo [ probe, result, ] if nr is 1
        return error_count;
      }));
      //.......................................................................................................
      urge('Ωbbbt__36', error_counts);
      info('Ωbbbt__36', bm.get_averages_by_tasks());
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
        report_checks: true
      };
      (new Test(guytest_cfg)).async_test(this.tasks);
      // ( new Test guytest_cfg ).test { fetch_example_com: @tasks.fetch_example_com, }
      return null;
    })();
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JlbmNobWFyay1jYW5vbmljYWwtanNvbi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQTtBQUFBLE1BQUEsQ0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsU0FBQSxFQUFBLElBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQTs7RUFFQSxHQUFBLEdBQTRCLE9BQUEsQ0FBUSxLQUFSOztFQUM1QixDQUFBLENBQUUsS0FBRixFQUNFLEtBREYsRUFFRSxJQUZGLEVBR0UsSUFIRixFQUlFLEtBSkYsRUFLRSxNQUxGLEVBTUUsSUFORixFQU9FLElBUEYsRUFRRSxPQVJGLENBQUEsR0FRNEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFSLENBQW9CLG9DQUFwQixDQVI1Qjs7RUFTQSxDQUFBLENBQUUsR0FBRixFQUNFLE9BREYsRUFFRSxJQUZGLEVBR0UsS0FIRixFQUlFLE9BSkYsRUFLRSxHQUxGLENBQUEsR0FLNEIsR0FBRyxDQUFDLEdBTGhDLEVBWkE7OztFQW1CQSxJQUFBLEdBQTRCLE9BQUEsQ0FBUSwyQkFBUjs7RUFDNUIsQ0FBQSxDQUFFLElBQUYsQ0FBQSxHQUE0QixJQUE1Qjs7RUFDQSxDQUFBLENBQUUsQ0FBRixDQUFBLEdBQTRCLE9BQUEsQ0FBUSx5QkFBUixDQUE1Qjs7RUFDQSxTQUFBLEdBQTRCLE9BQUEsQ0FBUSxtQ0FBUjs7RUFDNUIsQ0FBQTtJQUFFLHVCQUFBLEVBQXlCO0VBQTNCLENBQUEsR0FBa0MsU0FBUyxDQUFDLCtCQUFWLENBQUEsQ0FBbEMsRUF2QkE7Ozs7O0VBNkJBLElBQUMsQ0FBQSxLQUFELEdBR0UsQ0FB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TUFSdUQsQ0FBOUMsQ0FBbEIsRUFuREo7O01BNkRJLElBQUEsQ0FBSyxXQUFMLEVBQWtCLFlBQWxCO01BQ0EsSUFBQSxDQUFLLFdBQUwsRUFBa0IsRUFBRSxDQUFDLHFCQUFILENBQUEsQ0FBbEI7QUFDQSxhQUFPO0lBaEVRO0VBQWpCLEVBaENGOzs7RUFxR0EsSUFBRyxNQUFBLEtBQVUsT0FBTyxDQUFDLElBQXJCO0lBQStCLE1BQVMsQ0FBQSxDQUFBLENBQUEsR0FBQTtBQUN4QyxVQUFBO01BQUUsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixLQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsV0FBQSxHQUFjO1FBQUUsY0FBQSxFQUFnQixJQUFsQjtRQUEwQixXQUFBLEVBQWEsS0FBdkM7UUFBOEMsYUFBQSxFQUFlO01BQTdEO01BQ2QsQ0FBRSxJQUFJLElBQUosQ0FBUyxXQUFULENBQUYsQ0FBd0IsQ0FBQyxVQUF6QixDQUFvQyxJQUFDLENBQUEsS0FBckMsRUFGRjs7YUFJRztJQUxxQyxDQUFBLElBQXhDOztBQXJHQSIsInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBzdHJpY3QnXG5cbkdVWSAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlICdndXknXG57IGFsZXJ0XG4gIGRlYnVnXG4gIGhlbHBcbiAgaW5mb1xuICBwbGFpblxuICBwcmFpc2VcbiAgdXJnZVxuICB3YXJuXG4gIHdoaXNwZXIgfSAgICAgICAgICAgICAgID0gR1VZLnRybS5nZXRfbG9nZ2VycyAnYnJpY2FicmFjLWJlbmNobWFyay1jYW5vbmljYWwtanNvbidcbnsgcnByXG4gIGluc3BlY3RcbiAgZWNob1xuICB3aGl0ZVxuICByZXZlcnNlXG4gIGxvZyAgICAgfSAgICAgICAgICAgICAgID0gR1VZLnRybVxuIyBXR1VZICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy93ZWJndXknXG5HVE5HICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9ndXktdGVzdC1ORydcbnsgVGVzdCAgICAgICAgICAgICAgICAgIH0gPSBHVE5HXG57IGYgfSAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9lZmZzdHJpbmcnXG5TRk1PRFVMRVMgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnLi4vLi4vLi4vYXBwcy9icmljYWJyYWMtc2Ztb2R1bGVzJ1xueyBhbnNpX2NvbG9yc19hbmRfZWZmZWN0czogQywgfSA9IFNGTU9EVUxFUy5yZXF1aXJlX2Fuc2lfY29sb3JzX2FuZF9lZmZlY3RzKClcblxuXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiNcbiM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQHRhc2tzID1cblxuICAjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNhbm9uaWNpemVfanNvbjogLT5cbiAgICB7IGJpZ2ludF9mcm9tX2hydGltZSxcbiAgICAgIGhydGltZV9hc19iaWdpbnQsXG4gICAgICBCZW5jaG1hcmtlciwgICAgICAgICAgICB9ID0gU0ZNT0RVTEVTLnVuc3RhYmxlLnJlcXVpcmVfYmVuY2htYXJraW5nKClcbiAgICB7IHR5cGVfb2YsICAgICAgICAgICAgICAgIH0gPSBTRk1PRFVMRVMudW5zdGFibGUucmVxdWlyZV90eXBlX29mKClcbiAgICBjYW5vbmljYWxpemUgICAgICAgICAgICAgICAgPSByZXF1aXJlICdjYW5vbmljYWxpemUnXG4gICAgc3RyaW5naWZ5ICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSAnZmFzdC1qc29uLXN0YWJsZS1zdHJpbmdpZnknXG4gICAgYm0gICAgICAgICAgICAgICAgICAgICAgICAgID0gbmV3IEJlbmNobWFya2VyKClcbiAgICBicmFuZCAgICAgICAgICAgICAgICAgICAgICAgPSAnY2Fub2phc29uJ1xuICAgIHJlcGV0aXRpb25zICAgICAgICAgICAgICAgICA9IDFlNVxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgcHJvYmVzX2FuZF9tYXRjaGVycyA9IFtcbiAgICAgIFsge30sICd7fScgXVxuICAgICAgWyB7IGZyb21fYWNjb3VudDogJzU0MyAyMzIgNjI1LTMnLCB0b19hY2NvdW50OiAnMzIxIDU2NyA2MzYtNCcsIGFtb3VudDogNTAwLCBjdXJyZW5jeTogJ1VTRCcgfSwgJ3tcImFtb3VudFwiOjUwMCxcImN1cnJlbmN5XCI6XCJVU0RcIixcImZyb21fYWNjb3VudFwiOlwiNTQzIDIzMiA2MjUtM1wiLFwidG9fYWNjb3VudFwiOlwiMzIxIDU2NyA2MzYtNFwifScgXVxuICAgICAgWyBbIDU2LCB7ICcxJzogW10sICcxMCc6IG51bGwsIGQ6IHRydWUgfSBdLCAnWzU2LHtcIjFcIjpbXSxcIjEwXCI6bnVsbCxcImRcIjp0cnVlfV0nIF1cbiAgICAgIFsgeyBwZWFjaDogJ1RoaXMgc29ydGluZyBvcmRlcicsICdww6ljaMOpJzogJ2lzIHdyb25nIGFjY29yZGluZyB0byBGcmVuY2gnLCAncMOqY2hlJzogJ2J1dCBjYW5vbmljYWxpemF0aW9uIE1VU1QnLCBzaW46ICdpZ25vcmUgbG9jYWxlJyB9LCAne1wicGVhY2hcIjpcIlRoaXMgc29ydGluZyBvcmRlclwiLFwicMOpY2jDqVwiOlwiaXMgd3JvbmcgYWNjb3JkaW5nIHRvIEZyZW5jaFwiLFwicMOqY2hlXCI6XCJidXQgY2Fub25pY2FsaXphdGlvbiBNVVNUXCIsXCJzaW5cIjpcImlnbm9yZSBsb2NhbGVcIn0nIF1cbiAgICAgIFsgeyAnMSc6IHsgZjogeyBmOiAnaGknLCBGOiA1IH0sICdcXG4nOiA1NiB9LCAnMTAnOiB7fSwgJzExMSc6IFsgeyBlOiAneWVzJywgRTogJ25vJyB9IF0sICcnOiAnZW1wdHknLCBhOiB7fSwgQTogeyBiOiAnMTIzJyB9IH0sICd7XCJcIjpcImVtcHR5XCIsXCIxXCI6e1wiXFxcXG5cIjo1NixcImZcIjp7XCJGXCI6NSxcImZcIjpcImhpXCJ9fSxcIjEwXCI6e30sXCIxMTFcIjpbe1wiRVwiOlwibm9cIixcImVcIjpcInllc1wifV0sXCJBXCI6e1wiYlwiOlwiMTIzXCJ9LFwiYVwiOnt9fScgXVxuICAgICAgWyB7IG51bWJlcnM6IFsgMzMzMzMzMzMzLjMzMzMzMzMsIDFlKzMwLCA0LjUsIDAuMDAyLCAxZS0yNyBdLCBzdHJpbmc6IFwiXCJcIuKCrCRcXHgwRlxcbkEnQlwiXFxcXFxcXFxcIi9cIlwiXCIsIGxpdGVyYWxzOiBbIG51bGwsIHRydWUsIGZhbHNlIF0gfSwgXCJcIlwie1wibGl0ZXJhbHNcIjpbbnVsbCx0cnVlLGZhbHNlXSxcIm51bWJlcnNcIjpbMzMzMzMzMzMzLjMzMzMzMzMsMWUrMzAsNC41LDAuMDAyLDFlLTI3XSxcInN0cmluZ1wiOlwi4oKsJFxcXFx1MDAwZlxcXFxuQSdCXFxcXFwiXFxcXFxcXFxcXFxcXFxcXFxcXFxcIi9cIn1cIlwiXCIgXVxuICAgICAgWyB7ICcxJzogJ09uZScsICfigqwnOiAnRXVybyBTaWduJywgJ1xceDgwJzogJ0NvbnRyb2wnLCAn8J+Ygic6ICdTbWlsZXknLCAnw7YnOiAnTGF0aW4gU21hbGwgTGV0dGVyIE8gV2l0aCBEaWFlcmVzaXMnLCAn76yzJzogJ0hlYnJldyBMZXR0ZXIgRGFsZXQgV2l0aCBEYWdlc2gnLCAnPC9zY3JpcHQ+JzogJ0Jyb3dzZXIgQ2hhbGxlbmdlJyB9LCAne1wiMVwiOlwiT25lXCIsXCI8L3NjcmlwdD5cIjpcIkJyb3dzZXIgQ2hhbGxlbmdlXCIsXCJcXHg4MFwiOlwiQ29udHJvbFwiLFwiw7ZcIjpcIkxhdGluIFNtYWxsIExldHRlciBPIFdpdGggRGlhZXJlc2lzXCIsXCLigqxcIjpcIkV1cm8gU2lnblwiLFwi8J+YglwiOlwiU21pbGV5XCIsXCLvrLNcIjpcIkhlYnJldyBMZXR0ZXIgRGFsZXQgV2l0aCBEYWdlc2hcIn0nIF1cbiAgICAgIF1cbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHRvdGFsICAgICAgICAgPSBwcm9iZXNfYW5kX21hdGNoZXJzLmxlbmd0aCAqIHJlcGV0aXRpb25zXG4gICAgZXJyb3JfY291bnRzICA9IFtdXG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBlcnJvcl9jb3VudHMucHVzaCBibS50aW1laXQgeyBicmFuZCwgdG90YWwsIH0sIHBsYWluID0gKHsgcHJvZ3Jlc3MsIH0pIC0+XG4gICAgICBlcnJvcl9jb3VudCA9IDBcbiAgICAgIGZvciBuciBpbiBbIDEgLi4gcmVwZXRpdGlvbnMgXVxuICAgICAgICBmb3IgWyBwcm9iZSwgbWF0Y2hlciwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgICAgcHJvZ3Jlc3MoKVxuICAgICAgICAgIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5IHByb2JlXG4gICAgICAgICAgZXJyb3JfY291bnQrKyBpZiAoIG5yIGlzIDEgKSBhbmQgKCByZXN1bHQgaXNudCBtYXRjaGVyIClcbiAgICAgIHJldHVybiBlcnJvcl9jb3VudFxuICAgICMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgZXJyb3JfY291bnRzLnB1c2ggYm0udGltZWl0IHsgYnJhbmQsIHRvdGFsLCB9LCBzb3J0ZWQgPSAoeyBwcm9ncmVzcywgfSkgLT5cbiAgICAgIGVycm9yX2NvdW50ID0gMFxuICAgICAgZm9yIG5yIGluIFsgMSAuLiByZXBldGl0aW9ucyBdXG4gICAgICAgIGZvciBbIHByb2JlLCBtYXRjaGVyLCBdIGluIHByb2Jlc19hbmRfbWF0Y2hlcnNcbiAgICAgICAgICBwcm9ncmVzcygpXG4gICAgICAgICAgcmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkgcHJvYmUsICggT2JqZWN0LmtleXMgcHJvYmUgKS5zb3J0KClcbiAgICAgICAgICBlcnJvcl9jb3VudCsrIGlmICggbnIgaXMgMSApIGFuZCAoIHJlc3VsdCBpc250IG1hdGNoZXIgKVxuICAgICAgcmV0dXJuIGVycm9yX2NvdW50XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBlcnJvcl9jb3VudHMucHVzaCBibS50aW1laXQgeyBicmFuZCwgdG90YWwsIH0sIGthbm9uaWNhbGl6ZSA9ICh7IHByb2dyZXNzLCB9KSAtPlxuICAgICAgZXJyb3JfY291bnQgPSAwXG4gICAgICBmb3IgbnIgaW4gWyAxIC4uIHJlcGV0aXRpb25zIF1cbiAgICAgICAgZm9yIFsgcHJvYmUsIG1hdGNoZXIsIF0gaW4gcHJvYmVzX2FuZF9tYXRjaGVyc1xuICAgICAgICAgIHByb2dyZXNzKClcbiAgICAgICAgICByZXN1bHQgPSBjYW5vbmljYWxpemUgcHJvYmVcbiAgICAgICAgICBlcnJvcl9jb3VudCsrIGlmICggbnIgaXMgMSApIGFuZCAoIHJlc3VsdCBpc250IG1hdGNoZXIgKVxuICAgICAgICAgICMgZWNobyBbIHByb2JlLCByZXN1bHQsIF0gaWYgbnIgaXMgMVxuICAgICAgcmV0dXJuIGVycm9yX2NvdW50XG4gICAgIy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICBlcnJvcl9jb3VudHMucHVzaCBibS50aW1laXQgeyBicmFuZCwgdG90YWwsIH0sIGZhc3Rfc3RyaW5naWZ5ID0gKHsgcHJvZ3Jlc3MsIH0pIC0+XG4gICAgICBlcnJvcl9jb3VudCA9IDBcbiAgICAgIGZvciBuciBpbiBbIDEgLi4gcmVwZXRpdGlvbnMgXVxuICAgICAgICBmb3IgWyBwcm9iZSwgbWF0Y2hlciwgXSBpbiBwcm9iZXNfYW5kX21hdGNoZXJzXG4gICAgICAgICAgcHJvZ3Jlc3MoKVxuICAgICAgICAgIHJlc3VsdCA9IHN0cmluZ2lmeSBwcm9iZVxuICAgICAgICAgIGVycm9yX2NvdW50KysgaWYgKCBuciBpcyAxICkgYW5kICggcmVzdWx0IGlzbnQgbWF0Y2hlciApXG4gICAgICAgICAgIyBlY2hvIFsgcHJvYmUsIHJlc3VsdCwgXSBpZiBuciBpcyAxXG4gICAgICByZXR1cm4gZXJyb3JfY291bnRcbiAgICAjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHVyZ2UgJ86pYmJidF9fMzYnLCBlcnJvcl9jb3VudHNcbiAgICBpbmZvICfOqWJiYnRfXzM2JywgYm0uZ2V0X2F2ZXJhZ2VzX2J5X3Rhc2tzKClcbiAgICByZXR1cm4gbnVsbFxuXG5cblxuIz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiBtb2R1bGUgaXMgcmVxdWlyZS5tYWluIHRoZW4gYXdhaXQgZG8gPT5cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiBmYWxzZSwgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogZmFsc2UsIH1cbiAgZ3V5dGVzdF9jZmcgPSB7IHRocm93X29uX2Vycm9yOiB0cnVlLCAgIHNob3dfcGFzc2VzOiBmYWxzZSwgcmVwb3J0X2NoZWNrczogdHJ1ZSwgfVxuICAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkuYXN5bmNfdGVzdCBAdGFza3NcbiAgIyAoIG5ldyBUZXN0IGd1eXRlc3RfY2ZnICkudGVzdCB7IGZldGNoX2V4YW1wbGVfY29tOiBAdGFza3MuZmV0Y2hfZXhhbXBsZV9jb20sIH1cbiAgO251bGxcbiJdfQ==
