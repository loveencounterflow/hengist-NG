(async function() {
  'use strict';
  var $, GUY, PATH, Show, TMPTRM, alert, debug, demo_execa, demo_show, echo, execa, f, gold, help, info, inspect, isa_jsid, jsid_re, log, object_prototype, plain, pod_prototypes, praise, red, reverse, rpr, type_of, urge, warn, whisper, white, write,
    indexOf = [].indexOf;

  //===========================================================================================================
  GUY = require('guy');

  ({alert, debug, help, info, plain, praise, urge, warn, whisper} = GUY.trm.get_loggers('demo-execa'));

  ({rpr, inspect, echo, white, gold, red, reverse, log} = GUY.trm);

  PATH = require('node:path');

  ({execa, $} = require('execa'));

  ({f} = require('../../../apps/effstring'));

  write = function(p) {
    return process.stdout.write(p);
  };

  TMPTRM = GUY.trm;

  /*
  black
  blue
  green
  cyan
  sepia
  indigo
  steel
  brown
  olive
  lime
  red
  crimson
  plum
  pink
  orange
  gold
  tan
  yellow
  grey
  darkgrey
  white
  BASE03
  BASE02
  BASE01
  BASE00
  BASE0
  BASE1
  BASE2
  BASE3
  YELLOW
  ORANGE
  RED
  MAGENTA
  VIOLET
  BLUE
  CYAN
  GREEN
  */
  // debug 'Ω___1', require 'execa'
  // debug 'Ω___2', execa
  // debug 'Ω___3', $
  // debug 'Ω___4', $.sync
  // # { $: zx, cd: zx_cd }      = require 'zx'

  //===========================================================================================================
  demo_execa = function() {
    var count, line, lines;
    // debug 'Ω___5', d for d from await execa"trash nosuchfile"
    count = 0;
    // for await line from ( execa { cwd: '/home/flow/jzr/bing-image-creator-downloader', } )"cat /usr/share/dict/ngerman"
    lines = ($.sync({
      cwd: '/home/flow/jzr/bing-image-creator-downloader'
    }))`ls -AlF`;
    lines = lines.stdout;
    lines = lines.split('\n');
// for line from ( $.sync { cwd: '/home/flow/jzr/bing-image-creator-downloader', } )"ls -AlF"
    for (line of lines) {
      count++;
      if (count > 10000) {
        break;
      }
      help('Ω___6', rpr(line));
    }
    return null;
  };

  //-----------------------------------------------------------------------------------------------------------
  object_prototype = Object.getPrototypeOf({});

  pod_prototypes = [null, object_prototype];

  //-----------------------------------------------------------------------------------------------------------
  type_of = function(x) {
    /* TAINT consider to return x.constructor.name */
    var jstypeof, millertype, ref;
    if (x === null) {
      //.........................................................................................................
      /* Primitives: */
      return 'null';
    }
    if (x === void 0) {
      return 'undefined';
    }
    if ((x === +2e308) || (x === -2e308)) {
      return 'infinity';
    }
    if (x === true) {
      // return 'boolean'      if ( x is true ) or ( x is false )
      return 'true';
    }
    if (x === false) {
      return 'false';
    }
    if (Number.isNaN(x)) {
      return 'nan';
    }
    if (Number.isFinite(x)) {
      return 'float';
    }
    if (ref = Object.getPrototypeOf(x), indexOf.call(pod_prototypes, ref) >= 0) {
      // return 'unset'        if x is unset
      return 'pod';
    }
    //.........................................................................................................
    switch (jstypeof = typeof x) {
      case 'string':
        return 'text';
      case 'symbol':
        return 'symbol';
    }
    if (Array.isArray(x)) {
      //.........................................................................................................
      return 'list';
    }
    switch (millertype = ((Object.prototype.toString.call(x)).replace(/^\[object ([^\]]+)\]$/, '$1')).toLowerCase()) {
      case 'regexp':
        return 'regex';
    }
    return millertype;
  };

  // switch millertype = Object::toString.call x
  //   when '[object Function]'            then return 'function'
  //   when '[object AsyncFunction]'       then return 'asyncfunction'
  //   when '[object GeneratorFunction]'   then return 'generatorfunction'

  //===========================================================================================================
  /* thx to https://github.com/sindresorhus/identifier-regex */
  jsid_re = /^[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}]*$/v;

  isa_jsid = function(x) {
    return ((typeof x) === 'string') && jsid_re.test(x);
  };

  //===========================================================================================================
  Show = class Show {
    //---------------------------------------------------------------------------------------------------------
    constructor() {
      var me;
      me = function*(x) {
        var text;
        for (text of me.dispatch(x)) {
          me.state.ended_with_nl = text.endsWith('\n');
          yield text;
        }
        if (!me.state.ended_with_nl) {
          me.state.ended_with_nl = true;
          yield '\n';
        }
        return null;
      };
      Object.setPrototypeOf(me, this);
      this.state = {
        level: 0,
        ended_with_nl: false
      };
      this.spacer = '\x20\x20';
      Object.defineProperty(this, 'dent', {
        get: () => {
          return this.spacer.repeat(this.state.level);
        }
      });
      return me;
    }

    //---------------------------------------------------------------------------------------------------------
    go_down() {
      this.state.level++;
      return this.state.level;
    }

    //---------------------------------------------------------------------------------------------------------
    go_up() {
      if (this.state.level < 1) {
        throw new Error("Ω___7 unable to go below level 0");
      }
      this.state.level--;
      return this.state.level;
    }

    //---------------------------------------------------------------------------------------------------------
    * dispatch(x) {
      var method;
      if ((method = this[`show_${type_of(x)}`]) != null) {
        yield* method.call(this, x);
      } else {
        yield* this.show_other(x);
      }
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    _show_key(key) {
      var t;
      if (isa_jsid(key)) {
        return TMPTRM.cyan(key);
      }
      return [
        ...((function() {
          var results;
          results = [];
          for (t of this.dispatch(key)) {
            results.push(t);
          }
          return results;
        }).call(this))
      ].join('');
    }

    //---------------------------------------------------------------------------------------------------------
    * show_pod(x) {
      /* TAINT code duplication */
      var has_keys, key, text, value;
      has_keys = false;
      yield TMPTRM.gold('{');
//.......................................................................................................
      for (key in x) {
        value = x[key];
        has_keys = true;
        yield ' ' + (this._show_key(key)) + TMPTRM.gold(': ');
        for (text of this.dispatch(value)) {
          yield text;
        }
        yield TMPTRM.gold(',');
      }
      //.......................................................................................................
      yield TMPTRM.gold(!has_keys ? '}' : ' }');
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    * show_map(x) {
      /* TAINT code duplication */
      var has_keys, key, text, value, y;
      has_keys = false;
      yield TMPTRM.gold('map{');
//.......................................................................................................
      for (y of x.entries()) {
        [key, value] = y;
        has_keys = true;
        yield ' ' + (this._show_key(key)) + TMPTRM.gold(': ');
        for (text of this.dispatch(value)) {
          yield text;
        }
        yield TMPTRM.gold(',');
      }
      //.......................................................................................................
      yield TMPTRM.gold(!has_keys ? '}' : ' }');
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    * show_list(x) {
      var element, i, len, text;
      yield TMPTRM.gold('[');
      for (i = 0, len = x.length; i < len; i++) {
        element = x[i];
/* TAINT code duplication */
        for (text of this.dispatch(element)) {
          yield ' ' + text + (TMPTRM.gold(','));
        }
      }
      yield TMPTRM.gold((x.length === 0) ? ']' : ' ]');
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    * show_set(x) {
      var element, text;
      yield TMPTRM.gold('set[');
      for (element of x.keys()) {
/* TAINT code duplication */
        for (text of this.dispatch(element)) {
          yield ' ' + text + TMPTRM.gold(',');
        }
      }
      yield TMPTRM.gold((x.length === 0) ? ']' : ' ]');
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    * show_text(x) {
      if (indexOf.call(x, '"') >= 0) {
        yield (TMPTRM.green("'")) + (TMPTRM.green(x.replace(/'/g, "\\'"))) + (TMPTRM.green("'"));
      } else {
        yield (TMPTRM.green('"')) + (TMPTRM.green(x.replace(/"/g, '\\"'))) + (TMPTRM.green('"'));
      }
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    * show_float(x) {
      yield (TMPTRM.crimson(x.toString()));
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    * show_regex(x) {
      yield (TMPTRM.plum(x.toString()));
      return null;
    }

    //---------------------------------------------------------------------------------------------------------
    /* full words: */
    * show_true(x) {
      return (yield (TMPTRM.reverse(TMPTRM.bold(TMPTRM.lime('true')))));
    }

    * show_false(x) {
      return (yield (TMPTRM.reverse(TMPTRM.bold(TMPTRM.ORANGE('false')))));
    }

    * show_undefined(x) {
      return (yield (TMPTRM.reverse(TMPTRM.bold(TMPTRM.BLUE('null')))));
    }

    * show_null(x) {
      return (yield (TMPTRM.reverse(TMPTRM.bold(TMPTRM.pink('undefined')))));
    }

    * show_nan(x) {
      return (yield (TMPTRM.reverse(TMPTRM.bold(TMPTRM.pink('NaN')))));
    }

    /* (mostly) single letters: */
    // show_true:      ( x ) -> yield ( TMPTRM.reverse TMPTRM.bold TMPTRM.lime   ' T '     )
    // show_false:     ( x ) -> yield ( TMPTRM.reverse TMPTRM.bold TMPTRM.ORANGE ' F '     )
    // show_undefined: ( x ) -> yield ( TMPTRM.reverse TMPTRM.bold TMPTRM.BLUE   ' N '     )
    // show_null:      ( x ) -> yield ( TMPTRM.reverse TMPTRM.bold TMPTRM.pink   ' U '     )
    // show_nan:       ( x ) -> yield ( TMPTRM.reverse TMPTRM.bold TMPTRM.pink   ' NaN '   )

      //---------------------------------------------------------------------------------------------------------
    * show_other(x) {
      // yield '\n' unless @state.ended_with_nl
      yield TMPTRM.reverse(TMPTRM.red(`${x}`));
      return null;
    }

  };

  //===========================================================================================================
  demo_show = function() {
    var r, show;
    show = new Show();
    debug('Ω___8', show);
    debug('Ω___9', show.state);
    debug('Ω__10', rpr(show.dent));
    debug('Ω__11', show.go_down());
    debug('Ω__12', rpr(show.dent));
    echo();
    echo('-----------------------------------------------');
    for (r of show("foo 'bar'")) {
      write(r);
    }
    echo('-----------------------------------------------');
    for (r of show({})) {
      write(r);
    }
    echo('-----------------------------------------------');
    for (r of show({
      kong: 108,
      low: 923
    })) {
      write(r);
    }
    echo('-----------------------------------------------');
    for (r of show({
      kong: 108,
      low: 923,
      numbers: [10, 11, 12]
    })) {
      write(r);
    }
    echo('-----------------------------------------------');
    for (r of show([])) {
      write(r);
    }
    echo('-----------------------------------------------');
    for (r of show(['some', 'words', 'to', 'show'])) {
      write(r);
    }
    echo('-----------------------------------------------');
    for (r of show(new Map([['kong', 108], ['low', 923], [971, 'word'], [true, '+1'], ['a b c', false]]))) {
      write(r);
    }
    echo('-----------------------------------------------');
    for (r of show(new Set(['some', 'words', true, false, null, void 0, 3.1415926, 0/0]))) {
      write(r);
    }
    echo('-----------------------------------------------');
    for (r of show(/abc[de]/)) {
      write(r);
    }
    echo('-----------------------------------------------');
    echo();
    return null;
  };

  //===========================================================================================================
  if (module === require.main) {
    await (() => {
      // await demo_execa()
      return demo_show();
    })();
  }

  // f = ->
//   ### NOTE commit ID can be shortened ###
//   "https://raw.githubusercontent.com/loveencounterflow/mirror-github-file-to-local/7fccc7ec115302ab4d1e44e0a4c78b60d8215d94/index.js"
//   "https://raw.githubusercontent.com/#{user_and_repo}/7fccc7ec115302ab4d1e44e0a4c78b60d8215d94/#{relative_path}"

}).call(this);

//# sourceMappingURL=demo-show-pretty-printer.js.map