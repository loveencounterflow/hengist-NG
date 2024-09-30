(async function() {
  'use strict';
  var FS, GTNG, GUY, PATH, Test, WGUY, alert, debug, echo, help, info, inspect, isa, log, plain, praise, reverse, rpr, type_of, urge, warn, whisper;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('promptparser/test-cli'));

  ({rpr, inspect, echo, reverse, log} = GUY.trm);

  WGUY = require('../../../apps/webguy');

  // TMP_types                 = new ( require 'intertype-203.0.0' ).Intertype()
  GTNG = require('../../../apps/guy-test-NG');

  ({Test} = GTNG);

  PATH = require('node:path');

  FS = require('node:fs');

  // test_mode                 = 'throw_failures'
  // test_mode                 = 'throw_errors'
  // test_mode                 = 'failsafe'
  ({isa, type_of} = require('intertype'));

  // #===========================================================================================================
  // class Promptparser_cli extends Cli

  //   #---------------------------------------------------------------------------------------------------------
  //   jobdef:
  //     exit_on_error:  false
  //     commands:
  //       foo:      null
  //       do_this:  null
  //       refresh:
  //         allow_extra:    false
  //         flags:
  //           # $name:
  //           #   type:           function
  //           #   alias:          text
  //           #   description:    text
  //           #   multiple:       [ null, false, 'greedy', 'lazy', ]
  //           #   positional:     boolean
  //           #   fallback:       anything
  //           max_count:
  //             type:           return_error 'max_count', types.create.cli_max_count.bind types.create
  //             # alias:          # text
  //             description:    "processing will be short-cut after this many prompts"
  //             multiple:       false # [ null, false, 'greedy', 'lazy', ]
  //             positional:     false # boolean
  //             # fallback:       # anything
  //           foo:
  //             alias:          'f'
  //             type:           return_error 'foo', types.create.cli_foo.bind types.create
  //             description:    "sample"
  //             fallback:       1

  //   #---------------------------------------------------------------------------------------------------------
  //   cmd_do_this: -> help 'Ω___1', "cmd_do_this", @verdict
  //   cmd_foo:     -> help 'Ω___2', "cmd_foo",     @verdict
  //   cmd_refresh: -> help 'Ω___3', "cmd_refresh", @verdict

  // #===========================================================================================================
  // demo_cli_arguments = ->
  //   cli = new Promptparser_cli process.argv
  //   #.........................................................................................................
  //   # debug 'Ω___4', cli.verdict
  //   # debug 'Ω___5', rpr cli.verdict.cmd
  //   # debug 'Ω___6', rpr cli.verdict.parameters.max_count
  //   # debug 'Ω___7', rpr cli.verdict.parameters.foo
  //   return null

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      var ref, results, segment;
      help('Ω___8', new Intl.Segmenter().segment('👩🏻‍🏫'));
      ref = new Intl.Segmenter().segment('abc👩🏻‍🏫def');
      results = [];
      for (segment of ref) {
        results.push(help('Ω___8', rpr(segment)));
      }
      return results;
    })();
  }

  //   t = new Test { throw_on_error: false, }
//   t = new Test { throw_on_error: true, }
//   t.test { promptparser_tasks, }
//   # t.test { t: promptparser_tasks.single_prompt_parsing.parse_all_records, }

}).call(this);

//# sourceMappingURL=test-cli.js.map